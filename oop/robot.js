class Factory {
    constructor(){
    }    
    produceRobot(robotType, amount){
        let result = []
        for (let i = 0; i < amount; i++){
            if (robotType === 'wall-e'){
                result.push(new WallE('Wall-E'))
            } else if (robotType === 'baymax'){
                result.push(new BayMax('BayMax'))
            } else if (robotType === 'autobot'){
                result.push(new AutoBot('AutoBot'))
            }
        }
        return result
    }
}

class Robot {
    constructor(name){
        this._name = name || 'Robot'
    }
}

class WallE extends Robot {
    constructor(name){
        super(name)
        this.purpose = 'worker'
    }
    work(){
        console.log('Wall-E cleans the planet')
    }
}
class BayMax extends Robot{
    constructor(name){
        super(name)
        this.purpose = 'medic'
    }
    heal(){
        console.log('Hi, I am BayMax, how may I help you?')
    }
}
class AutoBot extends Robot {
    constructor(name){
        super(name)
        this.purpose = 'defender'
    }
    defend(){
        console.log('AutoBot, let\'s roll!')
    }
}

let RobotFactory = new Factory()

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}


