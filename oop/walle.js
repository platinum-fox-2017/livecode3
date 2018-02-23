const Robot = require('./robot')

class Walle extends Robot {
    constructor(name,purpose) {
        super(name,purpose);
    }

    work() {
        console.log('Wall-E cleans the planet');
    }
}

module.exports = Walle;