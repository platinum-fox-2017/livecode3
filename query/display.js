const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('query/database.db');

let query = "SELECT Status.title, Status.point, Status.level, Players.name,Players.age , Players.gender  ";
query += "FROM Players INNER JOIN Status ON  Status.playerId = Players.id ";
query += "GROUP BY Status.title ORDER BY Status.level DESC ";
db.all(query, function(err, rows) {
  console.log(err);
  console.log(rows);
});
query = "SELECT  COUNT(*)  as totalCard, Cards.playerId, Players.name, Players.age,  Players.gender ";
query += "FROM Players INNER JOIN Cards ON Cards.playerId = Players.id ";
query += "WHERE Players.gender = 'Male' ";
query += "GROUP BY Cards.playerId ORDER BY totalCard DESC LIMIT 3";
db.all(query, function(err, rows) {
  console.log(err);
  console.log(rows);
});
db.close();
