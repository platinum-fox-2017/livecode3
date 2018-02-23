const Robot = require('./robot');

class Walle extends Robot{
    constructor(){
        super('Wall-E','worker');
    }

    work(){
        console.log("Wall-E cleans the planet");
    }
}

module.exports = Walle;
