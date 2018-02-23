class Robot {
    constructor(name,purpose) {
        this._name = name;
        this._purpose = purpose;
    }

    set name(newName) {
        this._name = newName;
    }

    set purpose(newPurpose) {
        this._purpose = newPurpose;
    }

    get name() {
        return this._name;
    }

    get purpose() {
        return this._purpose;
    }
}

module.exports = Robot;