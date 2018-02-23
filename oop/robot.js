class Robot{
    constructor(name, purpose){
        this._name = name
        this._purpose =  purpose
    }
}

class RobotFactory{
    constructor(){
        this.robotName = []

    }

    static produceRobot(name, count){
        var arrRobot = []
        if(name == 'wall-e'){
            for(let i=0; i<count; i++){
                var walle = new WallE()
                arrRobot.push(walle)
                
            }
            return arrRobot
        }
        else if(name == 'baymax'){
            for(let i=0; i<count; i++){
                var baymax = new BayMax()
                arrRobot.push(baymax)
                
            }
            return arrRobot
        }
        else if(name == 'autobot'){
            for(let i=0; i<count; i++){
                var autobot = new AutoBot()
                arrRobot.push(autobot)
                
            }
            return arrRobot
        }
    }
}
class WallE extends Robot{
    constructor(name, purpose){
        super(name, purpose)
        this._name = 'Wall-E'
        this._purpose = 'worker'
        this.work = this.work()

    }

    work(){
        return 'Wall-E cleans the planet'
    }
}

class BayMax extends Robot{
    constructor(name, purpose, heal){
        super(name, purpose)
        this._name = 'BayMax'
        this._purpose = 'medic'
        this.heal = this.heal()
    }

    heal(){
        return 'Hi, I am BayMax, how may I help you?'
    }
}

class AutoBot extends Robot{
    constructor(name, purpose, defend){
        super(name, purpose)
        this._name = 'AutoBot'
        this._purpose = 'defend'
        this.defend = this.defend()
    }

    defend(){
        return `AutoBot, let's roll!`
    }


}

let robot = new WallE()
// console.log(walle.work)
// WallE.work()
// console.log(robot)

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

// for (var i = 0; i < baymax.length; i++) {
//   baymax[i].heal();
// }

// for (var i = 0; i < autobot.length; i++) {
//   autobot[i].defend();
// }