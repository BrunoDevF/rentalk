import { v4 as uuidV4} from 'uuid';


class Category {
    id?: string;
    created_at: Date;
    name: string;
    description: string;

    constructor(props: Omit<Category, 'created_at'>) {
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

export {  Category }