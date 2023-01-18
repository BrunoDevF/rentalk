import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("rental")
export class Rental {
  @PrimaryColumn()
  id?: string;
  @Column()
  car_id: string;
  @Column()
  user_id: string;
  @Column()
  start_date?: Date;
  @Column()
  end_date?: Date;
  @Column()
  expected_return_date: Date;
  @Column()
  total?: number;
  @CreateDateColumn()
  created_at?: Date;
  @UpdateDateColumn()
  updated_at?: Date;

  constructor(props: Omit<Rental, "created_at">) {
    Object.assign(this, {
      ...props,
      created_at: new Date(),
    });

    if (!this.id) {
      this.id = v4();
      this.created_at = new Date();
      this.start_date = new Date();
    } else {
      this.id = props.id;
    }
  }
}
