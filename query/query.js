const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')
const Table = require('cli-table')

db.serialize(function(){
  db.all(`SELECT title, point, level, name, age, gender FROM Status
          INNER JOIN Players ON Status.playerId = Players.id
          ORDER BY level DESC`, (error, data) => {
            if(!data){
              console.log(error);
            }else{
              console.log(data);
            }
          })
  db.all(`SELECT COUNT(*) as totalcard, Players.id, Players.name, age, gender FROM Players
          INNER JOIN Cards ON Players.id = Cards.playerId
          WHERE gender = 'Male'
          LIMIT 3`, (error, data) => {
            if(!data){
              console.log(error);
            }else{
              let table = new Table({
              head: ['totalcard', 'id', 'name', 'age', 'gender'],
              colWidths: [15, 5, 10, 5, 10]
              })

              for(let i=0; i<data.length; i++){
                table.push([data[i].totalcard, data[i].id, data[i].name, data[i].age, data[i].gender])
              }
              console.log(table.toString())
            }
          })
})

db.close()
