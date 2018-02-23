const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

db.all(`select title, point, level, Players.name, Players.age,Players.gender from Status left join Players on Status.playerId = Players.id order by point desc`,
        function (err,data) {
                console.log(data);
        })

db.all(`select count (*) as totalcard, Players.id, Players.name, Players.name, Players.age, Players.gender From Cards left join Players on Cards.playerId = Players.id where Players.gender ='Male' group by Players.name order by totalcard desc, Players.id asc limit 3`,
        function (err, data) {
                console.log(data);
        })
