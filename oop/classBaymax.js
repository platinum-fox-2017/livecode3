'use strict'
const Robot = require('./classRobot');

class BayMax extends Robot {
    constructor() {
        super('Baymax', 'medic')
    }

    heal() {
        console.log(`Hi, I am BayMax, how may I help you?`)
    }
}

module.exports = BayMax;