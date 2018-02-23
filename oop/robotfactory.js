const Walle = require('./walle');
const Autobot = require('./autobot');
const Baymax = require('./baymax');

class RobotFactory{
    static produceRobot(name, amount){
        let robotArr = new Array();
        let callback = new Function();

        switch(name){
            case 'wall-e':
                callback = RobotFactory.walle;
                break;
            case 'baymax':
                callback = RobotFactory.baymax;
                break;
            case 'autobot':
                callback = RobotFactory.autobot;
                break;
            default:
                calback = function(){};
                break;
        }

        for(let i = 0; i < amount; i++){
            robotArr.push(callback());
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
