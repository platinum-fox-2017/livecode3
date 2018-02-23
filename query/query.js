const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

function release0(){
    db.all(`select status.title,status.point,status.level,players.name,players.age,players.gender
            from status join players on status.playerid = players.id 
            group by players.id order by status.level desc`,function(err,data){
                if(err){
                    throw err
                }else{
                    console.log(data)
                }
            })
}

function release1(){
    db.all(`select count(cards.playerid)as totalcard,players.id,players.name,players.age,players.gender
            from cards join players on cards.playerid = players.id where players.gender = 'Male' 
            group by cards.playerid order by totalcard desc limit 3 `,function(err,data){
        if(err){
            throw err
        }else{
            console.log(data)
        }
    })

}

release0()
release1()