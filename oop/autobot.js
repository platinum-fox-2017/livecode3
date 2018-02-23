const Robot = require('./robot.js')

class Autobot extends Robot {
  constructor(name) {
    super(name)
    this.purpose = 'defend'
  }
  defend(){
    console.log("AutoBot, let's roll!")
  }
}

// var a = new Autobot('Bee','defender')
// a.defend()

module.exports = Autobot;
