
// export class Car {

//     id: string;

//     name: string;

//     description: string;

//     daily_rate: string;

//     available: string;

//     license_plate: string;

//     fine_amount: string;

//     brand: string;

//     category_id: string;

//     created_at: string

// }
import { v4 as uuidV4} from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity("car")
class Car {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    daily_rate: number;
    @Column()
    available?: string;
    @Column()
    license_plate: string;
    @Column()
    fine_amount: number;
    @Column()
    brand: string;
    @Column()
    category_id: string;
    @CreateDateColumn()
    created_at: string

    constructor(props: Omit<Car, 'created_at'>) {
        Object.assign(this, {
            ...props,
            created_at: new Date()
        });
        if(!this.id) {
            this.id = uuidV4();
        } else {
            this.id = props.id;
        }
    }
}

export { Car }