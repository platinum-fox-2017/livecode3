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