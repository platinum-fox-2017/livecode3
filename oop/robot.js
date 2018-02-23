class Robot{
    constructor (){
        this.name = 'Robot'
        this.purpose = 'purpose'
    }
}

class WallE extends Robot{
    constructor(){
        super()
        this.name= 'Wall-E'
        this.purpose= 'worker'
    }
    work(){
        console.log('Wall-E cleans the planet')
    }
}

class BayMax extends Robot{
    constructor(){
        super()
        this.name= 'BayMax'
        this.purpose= 'medic'
    }
    heal(){
        console.log('Hi, I am BayMax, how may I help you?')
    }
}
class AutoBot extends Robot{
    constructor(){
        super()
        this.name = 'AutoBot'
        this.purpose= 'defender'
    }
    defend(){
        console.log("AutoBot, let's roll!")
    }
}

module.exports = {
    WallE,
    BayMax,
    AutoBot
}