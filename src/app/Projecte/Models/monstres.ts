export class monstres {
    index!: number;
    name!: string;
    size!: string;
    type!: string;
    subtype!: string;

    constructor(index: number, name: string, size: string, type: string, subtype: string) {
        this.index = index;
        this.name = name;
        this.size = size;
        this.type = type;
        this.subtype = subtype;
    }

}