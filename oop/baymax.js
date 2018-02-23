const Robot = require('./robot');

class Baymax extends Robot{
    constructor(){
        super('BayMax','medic');
    }

    heal(){
        console.log("Hi, I am BayMax, how may I help you?");
    }
}

module.exports = Baymax;
