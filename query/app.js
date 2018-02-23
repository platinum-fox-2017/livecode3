const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

// Release 0
db.all(`SELECT Status.title,
Status.point,
Status.level,
Players.name,
Players.age,
Players.gender
FROM Status INNER JOIN Players ON
Players.id = Status.playerId
ORDER BY Status.level DESC `, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })

// RELEAE 1
db.all(`SELECT COUNT(*) as totalcard, Players.id, Players.name, age, gender
FROM Players
INNER JOIN Cards ON
Cards.playerId = Players.id
GROUP BY Players.name
HAVING gender = 'Male'
ORDER BY totalcard DESC, Players.id ASC LIMIT 3`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })