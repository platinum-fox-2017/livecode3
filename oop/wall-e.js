const Robot = require('./robot.js')

class Wall extends Robot {
  constructor(name) {
    super(name)
    this.purpose = 'worker'
  }
  work(){
    console.log('Wall-E cleans the planet')
  }
}

// let a = new Wall('wall-e')
// a.heal()

module.exports = Wall;
