const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(function(){
    db.all("SELECT title,point,level,name,age FROM Players INNER JOIN Status ON Players.id = Status.playerId ORDER BY level DESC;",(err,rows) =>{
        console.log("\nRelease 1: \n");

        console.log(rows);
    });

    db.all("SELECT (SELECT COUNT(*) FROM Cards WHERE playerId = Players.id) AS totalcard,id AS playerId,name,age,gender FROM Players WHERE gender = 'Male' ORDER BY totalcard DESC LIMIT 3;",(err,rows) =>{
        console.log("\nRelease 2: \n");

        console.log(rows);
    });

})

db.close();
