class Robot {
  constructor(name,purpose) {
    this.name = name;
    this.purpose = purpose;
  }
}
class WallE extends Robot {
  constructor(name,purpose) {
    super(name,purpose);
    this.method = this.work();
  }
  work(){
    return 'Wall-E cleans the planet';
  }
}
class BayMax extends Robot {
  constructor(name,purpose) {
    super(name,purpose);
    this.method = this.heal();
  }
  heal(){
    return 'Hi, I am BayMax, how may I help you?';
  }
}
class AutoBot extends Robot {
  constructor(name,purpose) {
    super(name,purpose);
    this.method = this.defend();
  }
  defend(){
    return `AutoBot, let's roll!`;
  }
}

class RobotFactory {
  static produceRobot(name,produce){
    if(name==='wall-e'){
      let walle = new WallE('Wall-E','worker');
      for (let i = 0; i < produce; i++) {
        console.log(walle.work());
      }
    } else if(name==='baymax'){
      let baymaxx = new BayMax('BayMax','medic');
      for (let i = 0; i < produce; i++) {
        console.log(baymaxx.heal());
      }
    } else if(name==='autobot'){
      let autobots = new AutoBot('Autobot','defender');
      for (var i = 0; i < produce; i++) {
        console.log(autobots.defend());
      }
    } else {
      console.log('Wrong robot');
    }
  }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);
