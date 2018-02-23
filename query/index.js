var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

//Release 0
// db.all(`SELECT title, point, level, Players.name, age  FROM Players
//         INNER JOIN Status ON Status.playerId = Players.id GROUP BY name`, (err, row) => {
//     if(err) throw err
//     console.log(row)
// })

//Release 1
db.all(`SELECT (SELECT count(Cards.playerId) WHERE Cards.Id = Players.id) as totalCard ,Players.name, age, gender from Players 
        INNER JOIN Cards ON Cards.Id = Players.id WHERE gender = 'Male' GROUP BY Players.name ORDER BY totalCard LIMIT 3`, (err,row) => {
    if (err) throw err
    console.log(row)
})

db.close();