class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.members.includes(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }
}

Group.from = function(iterable) {
    let group = new Group();
    for (let value of iterable) {
        group.add(value);
    }
    return group;
};

for (let value of group) {
    console.log(value);
}