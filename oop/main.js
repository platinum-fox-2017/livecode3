class Robot {
    constructor(name,purpose){
        this.name = name;
        this.purpose = purpose;
    }
}
class WallE extends Robot{
    constructor(){
        super()
        this.name = 'Wall-E';
        this.purpose = 'worker';
    }
    work(){
        console.log(`Wall-E cleans the planet`);
    }
}
class BayMax extends Robot{
    constructor(){
        super()
        this.name = 'BayMax';
        this.purpose = 'medic';
    }
    heal(){
        console.log(`Hi, I am BayMax, how may I help you?`);
    }
}
class AutoBot extends Robot{
    constructor(){
        super()
        this.name = 'AutoBot';
        this.purpose = 'defender';
    }
    defend(){
        console.log(`AutoBot, let's roll!`);
    }
}
// let wall_e = new WallE;
// let baymax = new BayMax;
// let autobot = new AutoBot;
wall_e.work();
baymax.heal();
autobot.defend();
// console.log(WallE.work());
// console.log(BayMax.heal());
// console.log(AutoBot.defend());

// class RobotFactory {
//     static produceRobot(name,amount){
//     }
// }

// let wall_e = RobotFactory.produceRobot('wall-e', 6);
// let baymax = RobotFactory.produceRobot('baymax', 5);
// let autobot = RobotFactory.produceRobot('autobot', 3);

// for (var i = 0; i < wall_e.length; i++) {
//   wall_e[i].work()
// }

// for (var i = 0; i < baymax.length; i++) {
//   baymax[i].heal();
// }

// for (var i = 0; i < autobot.length; i++) {
//   autobot[i].defend();
// }