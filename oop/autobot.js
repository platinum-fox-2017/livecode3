const Robot = require('./robot')

class Autobot extends Robot {
    constructor(name,purpose) {
        super(name,purpose);
    }

    defend() {
        console.log("AutoBot, let's roll!");   
    }
}

module.exports = Autobot;