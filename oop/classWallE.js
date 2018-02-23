'use strict'
const Robot = require('./classRobot');

class WallE extends Robot {
    constructor() {
        super('Wall-E', 'worker')
    }

    work() {
        console.log(`Wall-E cleans the planet`)
    }
}

module.exports = WallE;