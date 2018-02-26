const WallE   = require('./wallE.js');
const BayMax  = require('./bayMax.js');
const AutoBot = require('./autoBot.js');


class RobotFactory {
  constructor() {

  }

  static produceRobot(robotName, amount){
    if (robotName === 'wall-e') {
      let pack = [];
      for (var i = 0; i < amount; i++) {
        let wall_e = new WallE('Wall-E', 'worker');
        pack.push(wall_e);
      }
      return pack;

    } else if (robotName === 'baymax') {
      let pack = [];
      for (var i = 0; i < amount; i++) {
        let bay_max = new BayMax('BayMax', 'medic');
        pack.push(bay_max);
      }
      return pack;
    } else if (robotName === 'autobot') {
      let pack = [];
      for (var i = 0; i < amount; i++) {
        let auto_bot = new AutoBot('AutoBot', 'defender');
        pack.push(auto_bot);
      }
      return pack;
    }
  }


}

module.exports = RobotFactory
