const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

const Table = require('cli-table')
const chalk = require('chalk')

let table1 = new Table({
    head: ['title', 'point', 'level', 'name', 'age','gender']
  , colWidths: [15, 15,10,15,10,10]
});

let table2 = new Table({
    head: ['totalCard', 'playerId', 'name', 'age', 'gender']
  , colWidths: [10, 10,20,10,10]
})

class Query{
    constructor(){}

    static soal1(){
        let query = `SELECT Status.title, Status.point, Status.level, Players.name, Players.age, Players.gender
        FROM Status JOIN Players ON Status.playerId = Players.id
        order BY status.level desc`
        db.all(query,(err,datas)=>{
            const pushTable = datas.map(data=>{
                let array = []
                Object.keys(data).forEach((key,index)=>{
                    if(index % 2 === 0){
                        array.push(chalk.cyanBright(data[key]))
                    }else if(index % 3 === 0){
                        array.push(chalk.blueBright(data[key]))
                    }else{
                        array.push(chalk.yellow(data[key]))
                    }
                })
                table1.push(array)
            })
            
            console.log(table1.toString())
        })
    }

    static soal2(){
        let query = `SELECT count(Cards.playerId) AS totalCard, Cards.playerId, Players.name, Players.age, Players.gender
        FROM Cards JOIN Players ON Cards.playerId = Players.id
        where Players.gender = "Male"
        group BY Cards.playerId
        order BY totalCard desc
        limit 3`

        db.all(query,(err,datas)=>{
            const pushTable = datas.map(data=>{
                let array = []
                Object.keys(data).forEach((key,index)=>{
                    if(index % 4 === 0){
                        array.push(chalk.magenta(data[key]))
                    }else if(index % 3 === 0){
                        array.push(chalk.blueBright(data[key]))
                    }else if(index % 2 === 0){
                        array.push(chalk.yellowBright(data[key]))
                    }else{
                        array.push(chalk.redBright(data[key]))
                    }
                    
                })
                table2.push(array)
            })

            console.log(table2.toString())
        })
    }
}

Query.soal1()
Query.soal2()






