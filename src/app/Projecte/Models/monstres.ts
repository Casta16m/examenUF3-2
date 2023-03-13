export class monstres {
    id!: number;
    name!: string;
    size!: string;
    type!: string;
    subtype!: string;

    constructor(id: number, name: string, size: string, type: string, subtype: string) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.type = type;
        this.subtype = subtype;
    }

}