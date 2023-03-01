import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { Expose } from "class-transformer";
@Entity("user")
export class User {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_license: string;

  @Column()
  is_admin: string;

  @Column()
  avatar: string;

  @Expose({ name: "avatar_url" })
  avatar_url(): string {
    switch (process.env.disk) {
      case "local":
        return `${process.env.APP_API_URL}/avatar/${this.avatar}`
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/avatar/${this.avatar}`
      default:
        return null
    }
  }

  constructor() {
    if(!this.id) {
        this.id = uuidV4()
    }
  }
}
