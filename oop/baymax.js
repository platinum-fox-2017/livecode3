const Robot = require('./robot')

class Baymax extends Robot {
  constructor() {
    super()
    this.name = 'BayMax'
    this.purpose = 'medic'
  }
  heal(){
    console.log(`Hi, I'm ${this.name}, how may I help you?`)
  }
}
 module.exports = Baymax
