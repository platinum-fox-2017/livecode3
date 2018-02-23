const Robot = require('./robot')

class WallE extends Robot {
  constructor() {
    super()
    this.name = 'Wall-E'
    this.purpose = 'worker'
  }
  work(){
    console.log(`${this.name} cleans the planet`)
  }
}
 module.exports = WallE
