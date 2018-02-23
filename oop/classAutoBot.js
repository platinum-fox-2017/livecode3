'use strict'
const Robot = require('./classRobot');

class AutoBot extends Robot {
    constructor() {
        super('AutoBot', 'defenders')
    }

    defend() {
        console.log(`AutoBot, let's roll!`)
    }
}

module.exports = AutoBot;