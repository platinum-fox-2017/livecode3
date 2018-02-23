class Robot {
    constructor(name,purpose) {
        this._name = name;
        this._purpose = purpose;
    }
}

class WallE extends Robot {
    constructor(name,purpose) {
        super('Wall-E','worker')   
    }

    static work() {
        console.log('Wall-E cleans the planet');
    }

}

class BayMax extends Robot {
    constructor(name,purpose) {
        super('BayMax', 'medic')
    }

    static heal() {
        console.log('Hi, I am BayMax, how may I help you?');
    }

}

class AutoBot extends Robot {
    constructor(name,purpose) {
        super('AutoBot','defender')
        
    }

    static defend() {
        console.log('AutoBot, lets roll!');
    }

}


class RobotFactory {
    constructor() {
    }

    static produceRobot(name,number) {
        let robot1 = new WallE();
        // console.log(robot1);

        let robot2 = new BayMax();
        // console.log(robot2);

        let robot3 = new AutoBot();
        // console.log(robot3);

        var arrLot = [];
        if (name == 'wall-e') {
            for (var i = 0; i < number; i++) {
                arrLot.push(robot1);
            }
        } else if (name == 'baymax') {
            for (var i = 0; i < number; i++) {
                arrLot.push(robot2);
            }
        } else {
            for (var i = 0; i < number; i++) {
                arrLot.push(robot3);
            }
        }
        return arrLot;      

    }



}




// TEST CASE
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);
// console.log(wall_e);


for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work()
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}