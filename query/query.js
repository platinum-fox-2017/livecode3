var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

// release 0
function sortPlayer(){
    db.all(` SELECT title, point, level, Players.name, Players.age, Players.gender FROM Status
    LEFT JOIN Players ON Players.id = Status.playerId
    ORDER BY Status.level DESC`,(err,data)=>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
}



// sortPlayer()
function cardCount(){
    db.all(` SELECT COUNT(Cards.PlayerId) As totalcard,
                    Cards.playerId, Players.name,Players.age,Players.gender
             FROM Cards
             LEFT JOIN Players ON Players.id = Cards.playerId
             WHERE Players.gender = 'Male'
             GROUP BY Cards.playerId
             ORDER by totalcard DESC
             LIMIT 3
            `,(err,data)=>{
                if(!err){
                    console.log(data)
                }else{
                    console.log(err)
                }
            })
}
cardCount()
