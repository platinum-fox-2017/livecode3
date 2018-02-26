const Robot = require('./robot.js')

class Baymax extends Robot {
  constructor(name) {
    super(name)
    this.purpose = 'medic'
  }
  heal(){
    console.log('Hi, I am BayMax, how may I help you?')
  }
}

// let a = new Baymax('baymax')
// a.heal()
module.exports = Baymax;
