const Robot = require('./robot')

class Baymax extends Robot {
    constructor(name,purpose) {
        super(name,purpose);
    }

    heal() {
        console.log('Hi, I am BayMax, how may I help you?');
    }
}

module.exports = Baymax;