class Environment {
    private record: Record<string, any>;
    private parent: Environment | null;

    constructor(
        record: Record<string, any> = {},
        parent: Environment | null = null
    ) {
        this.record = record;
        this.parent = parent;
    }

    define(name: string, value: any): any {
        this.record[name] = value;
        return value;
    }

    lookup(name: string): any {
        return this.resolve(name).record[name];
    }

    assign(name: string, value: any): any {
        this.resolve(name).record[name] = value;
        return value;
    }

    private resolve(name: string): Environment {
        if (this.record.hasOwnProperty(name)) {
            return this;
        }

        if (this.parent === null) {
            throw new ReferenceError(`Variable "${name}" is not defined.`);
        }

        return this.parent.resolve(name);
    }
}

export default Environment;
