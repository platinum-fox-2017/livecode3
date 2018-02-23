const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

db.serialize(function(){
  // db.all(`SELECT title,point,level,name,age,gender
  //   FROM Status
  //   JOIN Players
  //     ON Status.playerId = Players.id
  //   GROUP BY name
  //   ORDER BY level DESC`, function(err,rows){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       console.log(rows);
  //     }
  //   })

  db.all(`SELECT COUNT(*) AS totalcard,playerId,name,age,gender
    FROM (SELECT playerId FROM Cards) AS NewCards
    JOIN Players
      ON NewCards.playerId = Players.id
    GROUP BY name
    ORDER BY totalcard DESC`, function(err,rows){
      if(err){
        console.log(err);
      } else {
        console.log(rows);
      }
  })
});
db.close();
