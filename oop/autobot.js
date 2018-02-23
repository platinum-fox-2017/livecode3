const Robot = require('./robot')

class Autobot extends Robot {
  constructor() {
    super()
    this.name = 'AutoBot'
    this.purpose = 'defender'
  }
  defend(){
    console.log(`${this.name}, let's roll!`)
  }
}
 module.exports = Autobot
