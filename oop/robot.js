'use strict'

class Robot {
  constructor(name){
    this.name = name
  }
}

class Wall_E extends Robot {
  constructor(name) {
    super(name)
    this.name = name || 'wall-E'
    this.purpose = 'Worker'
  }

  work() {
    console.log(`${this.name} cleans planet`)
  }
}

class Baymax extends Robot {
  constructor(name) {
    super(name)
    this.name = name || 'Baymax'
    this.purpose = 'Medic'
  }

  heal() {
    console.log(`Hi, I am ${this.name}, how may I help you?`)
  }
}

class AutoBot extends Robot {
  constructor(name) {
    super(name)
    this.name = name || 'AutoBot'
    this.purpose = 'Defender'
  }

  defend() {
    console.log(`${this.name} let's roll!!`)
  }
}
//
// let wall_E = new Wall_E()
// let bayMax = new Baymax()
// let autoBot = new AutoBot()

class RobotFactory {
  constructor(name,total) {
    this.name = name
    this.total = total
  }

  static produceRobot(name,total) {
    if(name === 'wall-e') {
      let arrOfRobot = []
      for(let i = 0; i < total; i++) {
        let robot = new Wall_E(name)
        arrOfRobot.push(robot)
      }
      return arrOfRobot
    } else if(name === 'baymax') {
      let arrOfRobot = []
      for(let i = 0; i < total; i++) {
        let robot = new Baymax(name)
        arrOfRobot.push(robot)
      }
      return arrOfRobot
    } else if(name === 'autobot') {
      let arrOfRobot = []
      for(let i = 0; i < total; i++) {
        let robot = new AutoBot(name)
        arrOfRobot.push(robot)
        }
      return arrOfRobot
    }
  }
}
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);
//
// console.log(wall_e);
// console.log(baymax);
// console.log(autobot);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}
