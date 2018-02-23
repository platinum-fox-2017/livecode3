const Robot = require('./robot')
const WallE = require('./wall-e')
const BayMax = require('./baymax')
const AutoBot = require('./autobot')

class RobotFactory {
  constructor() {

  }
  static produceRobot(robotName, totalRobot){
    let robot
    let result = []
    if(robotName === 'wall-e'){
      for(let i=0; i<totalRobot; i++){
        robot = new WallE
        result.push(robot)
      }
    }
    else if(robotName === 'baymax'){
      for(let i=0; i<totalRobot; i++){
        robot = new BayMax
        result.push(robot)
      }
    }
    else if(robotName === 'autobot'){
      for(let i=0; i<totalRobot; i++){
        robot = new AutoBot
        result.push(robot)
      }
    }
    return result
  }
}

module.exports = RobotFactory
