"use strict"

class Robot {
  constructor() {

  }
}

class WallE extends Robot {
  constructor() {
    super()
    this.name = 'Wall-E'
    this.purpose = 'worker'
  }

  work() {
    return console.log('Wall-E cleans the planet');
  }
}

class BayMax extends Robot {
  constructor() {
    super()
    this.name = 'BayMax'
    this.purpose = 'medic'
  }

  heal() {
    return console.log('Hi, I am BayMax, how may I help you?');
  }
}

class Autobot extends Robot {
  constructor() {
    super()
    this.name = 'AutoBot'
    this.purpose = 'defender'
  }

  defend() {
    return console.log('AutoBot, lets roll!');
  }
}

class RobotFactory {
  static produceRobot(name, jumlah) {
    if(name == 'wall-e') {
      let arrWallE = []
      for(let i = 0; i<jumlah; i++) {
        arrWallE.push(new WallE)
      }
      return arrWallE;

    } else if(name == 'baymax') {
      let arrBaymax = []
      for(let i = 0; i<jumlah; i++) {
        arrBaymax.push(new BayMax)
      }
      return arrBaymax;

    } else if(name == 'autobot') {
      let arrAutobot = []
      for(let i = 0; i<jumlah; i++) {
        arrAutobot.push(new Autobot)
      }
      return arrAutobot
    }
  }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for(var i=0; i<wall_e.length; i++) {
  wall_e[i].work()
}

for(var i=0; i<baymax.length; i++) {
  baymax[i].heal()
}

for(var i=0; i<autobot.length; i++) {
  autobot[i].defend()
}
