
class Robot{
    constructor(name,purpose){
        this.name = name
        this.purpose = purpose
    }

}

class WallE extends Robot{
    constructor(name,purpose){
        super(name,purpose)
    }
    work(){
        console.log(`Wall-E cleans the planet`)
    }
}

class Baymax extends Robot{
    constructor(name,purpose){
        super(name,purpose)
    }
    heal(){
        console.log(`hi, i am baymax, how may i help you ?`)
    }
}

class AutoBot extends Robot{
    constructor(name,purpose){
        super(name,purpose)
    }
    defend(){
        console.log(`Autobot, let's roll`)
    }
}

class RobotFactory{
    static produceRobot(robot,amount){
        let factory = []
        for(let i = 0 ; i < amount ; i ++){
            if(robot === 'wall-e'){
                factory.push(new WallE)
            }else if(robot === 'baymax'){
                factory.push(new Baymax)
            }else{
                factory.push(new AutoBot)
            }
        }
        return factory
    }
} 

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
