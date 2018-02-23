const Walle = require('./walle');
const Autobot = require('./autobot');
const Baymax = require('./baymax');

class RobotFactory{
    static produceRobot(name, amount){
        let robotArr = new Array();

        switch(name){
            case 'wall-e':
                var robotObj = new Walle();
                break;
            case 'baymax':
                var robotObj = new Baymax();
                break;
            case 'autobot':
                var robotObj = new Autobot();
                break;
        }

        for(let i = 0; i < amount; i++){
            robotArr.push(robotObj);
        }

        return robotArr;
    }

}
module.exports = RobotFactory;
