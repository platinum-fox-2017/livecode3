const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(function(){
    db.all("SELECT title,point,level,name,age FROM Players INNER JOIN Status ON Players.id = Status.playerId ORDER BY level DESC;",(err,rows) =>{
        console.log("\nRelease 1: \n");

        console.log(rows);
    });

    db.all("SELECT COUNT(*) as totalcard,Players.id as playerId, Players.name, Players.age, Players.gender FROM Players JOIN Cards ON Players.id = Cards.playerId WHERE Players.gender = 'Male' GROUP BY Players.id ORDER BY totalcard DESC LIMIT 3",(err,rows) =>{
        console.log("\nRelease 2: \n");

        console.log(rows);
    });

})

db.close();
