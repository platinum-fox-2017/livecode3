class Robot {
  constructor(name) {
    this.name= name
  }


}

class Baymax extends Robot{
  constructor(name) {
    super(name)
    this.purpose = ''
    this.method = ''
  }

  heal(){
    console.log('menuliskan Hi, I am BayMax, how may I help you?')
  }
}

class WallE extends Robot{
  constructor(name) {
    super(name)
    this.purpose = 'worker'
    this.method = ''
  }
  work(){
    console.log('menuliskan Wall-E cleans the planet')
  }
}

class AutoBot extends Robot{
  constructor(name) {
    super(name)
    this.purpose = ''
    this.method = ''
  }

  defend(){
    console.log('menuliskan AutoBot, lets roll!')
  }
}

class RobotFactory {
  constructor() {

  }

  static produceRobot(nama,jumlah){
    var simpan=[]
    for(let i=0;i<jumlah;i++){
      if (nama==='wall-e') {
        simpan.push(new WallE(nama))
      }
      else if(nama==='baymax'){
        simpan.push(new Baymax(nama))
      }
      else if(nama === 'autobot'){
        simpan.push(new AutoBot(nama))
      }
    }
    return simpan
  }
}

let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

for (var i = 0; i < wall_e.length; i++) {
  wall_e[i].work();
}

for (var i = 0; i < baymax.length; i++) {
  baymax[i].heal();
}

for (var i = 0; i < autobot.length; i++) {
  autobot[i].defend();
}
