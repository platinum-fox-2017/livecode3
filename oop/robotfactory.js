const Walle = require('./walle');
const Autobot = require('./autobot');
const Baymax = require('./baymax');

class RobotFactory{
    static produceRobot(name, amount){
        let robotArr = new Array();
        let createRobot = new Function();

        switch(name){
            case 'wall-e':
                createRobot = RobotFactory.walle;
                break;
            case 'baymax':
                createRobot = RobotFactory.baymax;
                break;
            case 'autobot':
                createRobot = RobotFactory.autobot;
                break;
            default:
                createRobot = function(){return null};
                break;
        }

        for(let i = 0; i < amount; i++){
            robotArr.push(createRobot());
        }
        return robotArr;
    }

    static walle(){
        return new Walle();
    }

    static baymax(){
        return new Baymax();
    }

    static autobot(){
        return new Autobot();
    }

}

module.exports = RobotFactory;
