import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
@Entity("user")
export class User {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  is_admin: string;

  constructor() {
    if(!this.id) {
        this.id = uuidV4()
    }
  }
}
