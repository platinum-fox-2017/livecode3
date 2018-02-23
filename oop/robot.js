class Robot {
    constructor(name, purpose) {
        this.name = name
        this.purpose = purpose
    }

}

class WallE extends Robot {
    constructor(name, purpose) {
        super(name, purpose)
        this.method = []
    }

    setWork(data) {
        this.method.push(data)
    }

    get work() {
        return 'Method WallE : ' + this.method[0]
    }

}

class BayMax extends Robot {
    constructor(name, purpose) {
        super(name, purpose)
        this.method = []
    }

    setHeal(data) {
        this.method.push(data)
    }

    get heal() {
        return 'Method BayMax : ' + this.method[0]
    } 
}

class AutoBot extends Robot {
    constructor(name, purpose) {
        super(name, purpose)
        this.method = []
    }

    setDefend(data) {
        this.method.push(data)
    }

    get defend() {
        return 'Method AutoBot : ' + this.method[0]
    }
}

class RobotFactory {
    constructor() {}

    static produceRobot(robot, num) {
        let arrWalle = []

        if (robot === 'wall-e') {

            let walle = new WallE('Wall-E', 'worker')
            walle.method.push('Wall-E cleans the planet')
            
            for (let i = 0; i < num; i++) {
                arrWalle.push(walle)
            }

       } 
    }

}

let wallRobot = new WallE('Wall-E', 'worker')
let bayMaxRobot = new BayMax('BayMax', 'medic')
let autoBotRobot = new AutoBot('AutoBot', 'defender')


wallRobot.setWork('Wall-E cleans the planet')
bayMaxRobot.setHeal('Hi, I am BayMax, how may I help you?')
autoBotRobot.setDefend("AutoBot, lets roll!")

// console.log(wallRobot)
// console.log(bayMaxRobot)
// console.log(autoBotRobot)


let wall_e = RobotFactory.produceRobot('wall-e', 6);
wall_e
// work()
let baymax = RobotFactory.produceRobot('baymax', 5);
// let autobot = RobotFactory.produceRobot('autobot', 3);

// for (var i = 0; i < wall_e.length; i++) {
//     wall_e[i].work()
// }

// for (var i = 0; i < baymax.length; i++) {
//     baymax[i].heal();
// }

// for (var i = 0; i < autobot.length; i++) {
//     autobot[i].defend();
// }