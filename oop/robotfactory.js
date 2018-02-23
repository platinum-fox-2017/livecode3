const Autobot = require('./autobot');
const Walle   = require('./walle');
const Baymax  = require('./baymax');


class RobotFactory {
    constructor() {

    }

    static produceRobot(name, unit) {
        let arrRobot = [];

        if(name == "wall-e") {
            for(let i = 0;i < unit;i++) {
                let walle = new Walle()
                arrRobot.push(walle)
            }
        } else if (name == "baymax") {
            for(let i = 0;i < unit;i++) {
                let baymax = new Baymax()
                arrRobot.push(baymax)
            }
        } else if (name == "autobot") {
            for(let i = 0;i < unit;i++) {
                let autobot = new Autobot()
                arrRobot.push(autobot)
            }
        }

        return arrRobot;
    }
}

module.exports = RobotFactory;