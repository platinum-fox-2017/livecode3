class Robot {
    constructor(name) {
        this.name = name
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
    constructor(name) {
        this.product = new Robot(name)
        console.log(this.product)
    }

    static produceRobot(name, number) {
        let arr = []
        for (let index = 0; index < number; index++) {
            arr.push(name)
        }
        return arr
    }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6)
console.log(wall_e)

// let baymax = RobotFactory.produceRobot('baymax', 5);
// let autobot = RobotFactory.produceRobot('autobot', 3);