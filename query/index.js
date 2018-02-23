const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(function() {
    let query = `SELECT title, point, level, name, age, gender FROM Players
                INNER JOIN Status on Players.id = Status. playerId 
                ORDER BY Status.level DESC`
    db.all(query,(err,rows)=>{
        if (err) throw err;
        //console.log(rows)
    })

    let query2 = `SELECT count(Cards.playerId) as totalCard, playerId, Players.name, age, gender FROM Players
                INNER JOIN Cards on Players.id = Cards.playerId  
                GROUP BY playerId
                HAVING Players.gender = 'Male'   
                ORDER BY totalCard DESC
                LIMIT 3`
    db.all(query2,(err,rows)=>{
        if (err) throw err;
        console.log(rows)
    })
})

// tampilkan `player` yang memiliki `jumlah kartu`, dan berjenis kelamin `male`
// serta tampilkan 3 teratas dari yang paling banyak jumlah kartunya.