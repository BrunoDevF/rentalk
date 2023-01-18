import request from 'supertest'

import server from '../../../../shared/infra/http/server'

describe("Create category controller", async () => {
    it("teste ", async () => {
        await request(server).get('/cars/available').expect(200)

    })
})