import request from 'supertest'

import server from '../../../../shared/infra/http/server'
import { Connection } from 'typeorm';
import createConnection from '../../../../shared/infra/typeorm/seedC'
import { hash } from 'bcrypt';
import { v4 } from 'uuid';

let connection: Connection;
describe("List categories", () => {

    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations()
        const password = await hash('admin', 8)
        const id = v4();
        await connection.query(
            `INSERT INTO "user" (id, "created_at", name, email, driver_license, password, is_admin)
                    VALUES('${id}', 'Wed Jan 11 2023 04:06:07 GMT+0000', 'admin', 'admin@admin.com.br', '123','${password}', true)
                `
          );
    })

    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close();
    })
    
    it("should be able to list all categories", async () => {
        const responseToken = await request(server).post('/sessions')
        .send({
            email: 'admin@admin.com.br',
            password: 'admin',
        })

        const { token } = responseToken.body

        await request(server).post('/categories')
        .send({
            name: 'Category supertest',
            description: 'Category supertest'
        }).set({
            Authorization: `Bearer ${token}`
        })

        const response = await request(server).get('/categories')
        expect(response.status).toBe(200)
        expect(response.body.length).toBe(1)
        expect(response.body[0]).toHaveProperty('id')
    })

   
})