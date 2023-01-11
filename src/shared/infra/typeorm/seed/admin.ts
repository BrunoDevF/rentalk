import { hash } from "bcrypt";
import { getConnection } from "typeorm";
import { v4 as uuidV4} from 'uuid';
import createConnection from '../index'

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO "user" (id, "created_at", name, email, driver_license, password, is_admin)
            VALUES('${id}', 'Wed Jan 11 2023 04:06:07 GMT+0000', 'admin', 'admin@admin.com.br', '123','${password}', true)
        `
  );
}

create().then(() => console.log("User admin created"));
