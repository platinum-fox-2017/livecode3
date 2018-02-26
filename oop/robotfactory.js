const autoBot = require('./autobot')
const bayMax = require('./baymax')
const walle = require('./walle')

class RobotFactory{
    constructor(){

    }

    static produceRobot(name,qty){
        let output = []
        if(name === 'wall-e'){
            for(let i = 0; i < qty; i++){
                output.push(walle)
            }
        }else if(name === 'baymax'){
            for(let i = 0; i < qty; i++){
                output.push(bayMax)
            }
        }else if(name === 'autobot'){
            for(let i = 0; i < qty; i++){
                output.push(autoBot)
            }
        }

        return output
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