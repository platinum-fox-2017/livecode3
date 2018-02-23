const Robot = require('./robot');

class Autobot extends Robot{
    constructor(){
        super('AutoBot','defender');
    }

    defend(){
        console.log("AutoBot, let's roll!");
    }
}

module.exports = Autobot;
