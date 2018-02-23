const WallE = require('./wall-e');
const BayMax = require('./bay-max');
const AutoBot = require('./auto-bot');

class RobotFactory {
    constructor(){

    }

    static produceRobot(name, count){
        if(name == 'wall-e'){
            let robots = [];
            for(let i=0; i<count; i++){
                robots.push(new WallE())
            }
            return robots;
        }else if(name == 'baymax'){
            let robots = [];
            for(let i=0; i<count; i++){
                robots.push(new BayMax())
            }
            return robots;
        }else if(name == 'autobot'){
            let robots = [];
            for(let i=0; i<count; i++){
                robots.push(new AutoBot())
            }
            return robots;
        }
    }
}

module.exports = RobotFactory;