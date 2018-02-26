const Robot = require('./robot')

class Walle extends Robot{
    constructor(name,purpose){
        super(name,purpose)
    }

    work(){
        console.log('Wall-E cleans the planet')

    }
}

let walle = new Walle('Wall-E','worker')

module.exports = walle