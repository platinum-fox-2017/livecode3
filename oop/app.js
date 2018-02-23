const WallE = require('./wall-e')
const BayMax = require('./baymax')
const AutoBot = require('./autobot')
const RobotFactory = require('./robotfactory')

let Walle = new WallE
let Baymax = new BayMax
let Autobot = new AutoBot

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
