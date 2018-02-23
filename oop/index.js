
class Robot {
  constructor(name, purpose) {
    this.name = name
    this.purpose = purpose
  }
}

class WallE extends Robot{
  constructor(name, purpose) {
    super(name, purpose)
  }
  work() {
    console.log('Wall-E cleans the planet');
  }
}

class BayMax extends Robot{
  constructor(name, purpose) {
    super(name, purpose)
  }
  heal() {
    console.log('Hi, I am BayMax, how may I help you?');
  }
}

class AutoBot extends Robot{
  constructor(name, purpose) {
    super(name, purpose)
  }
  defend() {
    console.log("AutoBot, let's roll!");
  }
}

class robotFactory {
  constructor() {

  }
  produceRobot(name, sum) {
    let arr = []
    for (var i = 0; i < sum; i++) {
      if (name === 'wall-e') {
        var data = new WallE(name, 'worker')
        // return data
        arr.push(data)
      }
      else if (name === 'baymax') {
        var data = new BayMax(name, 'medic')
        arr.push(data)
      }
      else if (name === 'autobot') {
        var data = new AutoBot(name, 'defender')
        arr.push(data)
      }
    }
    return arr

  }
}

const RobotFactory = new robotFactory()


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
