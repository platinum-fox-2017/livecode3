const Robot = require('./robot');

class AutoBot extends Robot{
    constructor(){
        super('AutoBot', 'defender');
    }
    defend(){
        console.log('AutoBot, let\'s roll!');
    }
}

module.exports = AutoBot;