import { v4 as uuidV4 } from "uuid";

class Specification {
  id?: string;
  created_at: Date;
  name: string;
  description: string;

  constructor(props: Omit<Specification, "created_at">) {
    Object.assign(this, {
      ...props,
      created_at: new Date(),
    });
    if (!this.id) {
      this.id = uuidV4();
    } else {
      this.id = props.id;
    }
  }
}

export { Specification };
