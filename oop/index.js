class Robots {
    constructor(name, purpose){
        this.name = name
        this.purpose = purpose
    }
}

class WallE extends Robots {
    constructor(name, purpose){
        super(name, purpose)
    }
    work(){
        console.log('Wall-E cleans the planet')
    }
}
class Baymax extends Robots {
    constructor(name, purpose){
        super(name, purpose)
    }
    heal(){
        console.log('Hi, I am BayMax, how may I help you?')
    }
}
class AutoBot extends Robots {
    constructor(name, purpose){
        super(name, purpose)
    }
    defend(){
        console.log('AutoBot, lets roll!')
    }
}

class RobotFactory {
    constructor(){

    }
    static produceRobot(name, qty){
        if(name === 'wall-e'){
            for (let i = 0; i < qty; i++) {
                let w = new WallE(name, qty)
                w.work()
              }
        } else if(name === 'baymax'){
            for (let i = 0; i < qty; i++) {
                let w = new Baymax(name, qty)
                w.heal()
              }
        } else if(name === 'autobot'){
            for (let i = 0; i < qty; i++) {
                let w = new AutoBot(name, qty)
                w.defend()
              }
        }
    }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);
