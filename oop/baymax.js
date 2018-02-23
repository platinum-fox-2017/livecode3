const Robot = require('./robot')

class BayMax extends Robot{
    constructor(name,purpose){
        super(name,purpose)
    }

    heal(){
        console.log('Hi, I am BayMax, how may I help you?')
    } 
}

let bayMax = new BayMax('BayMax','medic')


module.exports = bayMax