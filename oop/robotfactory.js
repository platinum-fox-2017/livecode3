const {WallE,BayMax,AutoBot} = require('./robot')

class RobotFactory{
    static produceRobot(robot, length){
        let arr = []
        for(let i =0; i<length; i++){
            if(robot ==='wall-e'){
                let wallE = new WallE()
                arr.push(wallE)
            }else if(robot === 'baymax'){
                let bayMax = new BayMax()
                arr.push(bayMax)
            }else{
                let autoBot = new AutoBot()
                arr.push(autoBot)
            }
        }
        return arr
    }
}

module.exports = RobotFactory