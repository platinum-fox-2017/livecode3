'use strict'
const WallE = require('./classWallE');
const BayMax = require('./classBaymax');
const AutoBot = require('./classAutoBot');

class RobotFactory{
    static produceRobot(type, qty) {
        let robots = [];
        for(let i = 0; i<qty; i++){
            if(type === 'wall-e') robots.push(new WallE());
            if(type === 'baymax') robots.push(new BayMax());
            if(type === 'autobot') robots.push(new AutoBot());
        }
        return robots;
    }
}

module.exports = RobotFactory;