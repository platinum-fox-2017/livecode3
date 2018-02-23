const Robot = require('./robot');

class BayMax extends Robot{
    constructor(){
        super('BayMax', 'medic');
    }
    heal(){
        console.log('Hi, I am BayMax, how may I help you?')
    }
}

module.exports = BayMax;