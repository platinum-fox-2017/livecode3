const Wall = require('./wall-e.js')
const Baymax = require('./baymax.js')
const Autobot = require('./autobot.js')

class RobotFactory {
  constructor() {
  }

  static produceRobot(name,amount){
    let arr = []
    if(name === 'wall-e'){
      for(let i =0;i<amount;i++){
        let robot = new Wall(name)
        arr.push(robot)
      }
    } else if(name === 'baymax'){
      for(let i =0;i<amount;i++){
        let robot = new Baymax(name)
        arr.push(robot)
      }
    } else if(name === 'autobot'){
      for(let i =0;i<amount;i++){
        let robot = new Autobot(name)
        arr.push(robot)
      }
    }
    return arr
  }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}
