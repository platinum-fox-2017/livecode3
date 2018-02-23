class Robot {
  constructor(name, purpose) {
    this.name = name
    this.purpose = purpose
  }
}

class WallE extends Robot {
  constructor(name, purpose) {
    super(name, purpose)
  }

  work() {
    console.log(`Wall-E cleans the planet`)
  }
}

class BayMax extends Robot {
  constructor(name, purpose) {
    super(name, purpose)
  }

  heal() {
    console.log(`Hi, I am BayMax, how may I help you?`)
  }
}

class AutoBot extends Robot {
  constructor(name, purpose) {
    super(name, purpose)
  }

  defend() {
    console.log(`AutoBot, let's roll!`)
  }
}

class RobotFactory {
  static produceRobot(name, count) {
    let robot = []
    while(count > 0) {
      if(name === 'wall-e') {
        robot.push(new WallE('Wall-E', 'worker'))
      } else if(name === 'baymax') {
        robot.push(new BayMax('BayMax', 'medic'))
      } else if(name === 'autobot') {
        robot.push(new AutoBot('AutoBot', 'defender'))
      }
      count--
    }
    return robot
  }
}
//------------------------------------------------
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);
// console.log(wall_e)
// console.log(baymax[0].heal())
for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}