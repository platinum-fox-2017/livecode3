class Robot {
    constructor(name, purpose, method) {
        this.name = name
        this.purpose = purpose
        this.method = method
    }

    static work() {
        console.log(`${this.name} cleans the planet`);
    }

}

class WallE extends Robot {
    constructor(name, purpose, method) {
        super(name, purpose, method)
    }
}

class BayMax {

}

class AutoBot {

}

class RobotFactory {
    constructor() {
        this.product = new Robot()
    }
    
    static produceRobot(name, number) {
        let arr = []
        for (let index = 0; index < number; index++) {
            let obj = { name: name }
            arr.push(obj)
        }
        return arr
    }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6)
console.log(wall_e)

for (var i = 0; i < wall_e.length; i++) {
    wall_e[i].work()
}
// let baymax = RobotFactory.produceRobot('baymax', 5);
// let autobot = RobotFactory.produceRobot('autobot', 3);