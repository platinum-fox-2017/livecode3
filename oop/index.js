'use strict'

class Robot {
    constructor(name, purpose){
        this.name = name
        this.purpose = purpose
    }
}

class RobotFactory{
    constructor(){}
    static produceRobot(name, qty){
        if (name === 'wall-e') {
            let produce = new WallE()
            for (let x = 0; x < qty; x++) {
                console.log(produce.method);
            }
        }else if (name === 'baymax') {
            let produce = new BayMax()
            for (let x = 0; x < qty; x++) {
                console.log(produce.method);
            }
        }else if (name === 'autobot') {
            let produce = new AutoBot()
            for (let x = 0; x < qty; x++) {
                console.log(produce.method);
            }
        }
    }
}

class WallE extends Robot{
    constructor(){
        super('Wall-E')
        super.purpose = 'woker'
        super.method = 'Wall-E cleans the planet'
    }
}

class BayMax extends Robot{
    constructor(){
        super('BayMax')
        super.purpose = 'medic'
        super.method = 'Hi, I am BayMax, how may I help you?'
    }
}

class AutoBot extends Robot{
    constructor(){
        super('AutoBot')
        super.purpose = 'defender'
        super.method = "AutoBot, let's roll!"
    }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

// for (var i = 0; i < wall_e.length; i++) {
//     wall_e[i].work()
// }

// for (var i = 0; i < baymax.length; i++) {
//     baymax[i].heal();
// }

// for (var i = 0; i < autobot.length; i++) {
//     autobot[i].defend();
// }