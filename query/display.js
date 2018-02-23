const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

//RELEASE 0
let sql =  `SELECT s.title, s.point, s.level, p.name, p.age, p.gender
            FROM Status as s
            JOIN Players as p ON s.playerId = p.id
            ORDER BY s.level DESC
`
db.all(sql, [], (err, rows) => {
    if(err) console.log(err);
    console.log(rows);
})

//RELEASE 1
let sql2 = `SELECT count(*) as totalCards, p.id as playerId, p.name, p.age, p.gender
            FROM Players as p
            JOIN Cards as c ON c.playerId = p.id
            WHERE p.gender = 'Male'
            GROUP BY p.id
            ORDER BY count(*) DESC
            LIMIT 3`
db.all(sql2, [], (err, rows) => {
    if(err) console.log(err);
    console.log(rows);
})