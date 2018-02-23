// Buatlah class Robot dengan property name dan purpose
// Buatlah class-class robot yang akan diproduksi.
// Adapun spesifikasi setiap robot adalah sebagai berikut:

// ```text
// WallE

// name: 'Wall-E',
// purpose: 'worker'
// method:
// work(), menuliskan 'Wall-E cleans the planet'

// BayMax

// name: 'BayMax'
// purpose: 'medic'
// method:
// heal(), menuliskan 'Hi, I am BayMax, how may I help you?'

// AutoBot

// name: 'AutoBot'
// purpose: 'defender'
// method:
// defend(), menuliskan "AutoBot, let's roll!"

class Robot{
  constructor(){
    this.name = ''
    this.purpose = ''
  }
  
}

class Wall_e extends Robot{
  constructor(){
    super()
    this.name = 'Wall-E'
    this.purpose = 'worker'
  }
  work(){
    console.log(`${this.name} cleans the planet`)
  }
}
class BayMax extends Robot{
  constructor(){
    super()
    this.name = 'BayMax'
    this.purpose = 'medic'

  }
  heal(){
    console.log(`Hi, I am ${this.name}, how may I help you?`)
  }
}
class AutoBot extends Robot{
  constructor(){
    super()
    this.name = 'AutoBot'
    this.purpose = 'defender'
    
  }
  defend(){
    console.log(`${this.name}, let's roll!`)
  }
}
// Selanjutnya, buatlah class RobotFactory dengan method produceRobot yang menerima parameter 
// nama robot yang ingin dibuat beserta jumlah yang ingin dibuat. Method tersebut akan 
// mengembalikan array of objects.

class RobotFactory{
  constructor(){

  }
  static produceRobot(namaRobot,jumlah){
    let result =[]
    if(namaRobot === 'wall-e'){
      for(let i =0;i<jumlah;i++){
        let walle = new Wall_e()
        result.push(walle)
      }
    }
    else if(namaRobot === 'baymax'){
      for(let j=0;j<jumlah;j++){
        let baymax = new BayMax()
        result.push(baymax)
      }
    }
    else if(namaRobot === 'autobot'){
      for(let k=0;k<jumlah;k++){
        let autobot = new AutoBot()
        result.push(autobot)
      }
    }
    return result
  }
  

}
let test = new AutoBot()
// test.defend()


// javascript
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

// ============output yang diharapkan:
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// AutoBot, let's roll!
// AutoBot, let's roll!
// AutoBot, let's roll!