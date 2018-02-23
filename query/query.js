const sqlite3 = require('sqlite3')
const CliTable = require('cli-table')

function release0() {
  let db = new sqlite3.Database('./database.db', function(err){
    if (err) {
      console.log(err);
    }
  })

  db.serialize(function(){

    db.all('SELECT Status.title, Status.point, Status.level, Players.name, Players.gender, Players.age FROM Players JOIN Status ON Status.playerId = Players.id ORDER BY Status.level DESC' , function(err, rows){
      if (err) {
        console.log(err);
      } else {
        // console.log(rows);

        let cli_table = new CliTable({
          head: ['title', 'point', 'level', 'name', 'gender', 'age'],
          colwidths: [20, 15, 15, 20, 20, 20]
        });

        for (var i = 0; i < rows.length; i++) {
          let newRows = [rows[i].title,rows[i].point,rows[i].level, rows[i].name, rows[i].gender, rows[i].age];
          cli_table.push(newRows)
        }

        console.log(cli_table.toString());
      }
    })

  })
  db.close()
}

function release1() {
  let db = new sqlite3.Database('./database.db', function(err){
    if (err) {
      console.log(err);
    }
  })

  db.serialize(function(){

    db.all('SELECT COUNT(*) AS totalCard, Players.id, Players.name, Players.age, Players.gender FROM Cards JOIN Players ON Players.id = Cards.playerId WHERE Players.gender = "Male" GROUP BY Players.name ORDER BY totalCard DESC, Players.age ASC LIMIT 3' , function(err, rows){
      if (err) {
        console.log(err);
      } else {
        // console.log(rows);
        let cli_table = new CliTable({
          head: ['totalCard', 'ID', 'Name', 'Age', 'Gender'],
          colwidths: [10, 10, 30, 10, 20]
        });

        for (var i = 0; i < rows.length; i++) {
          let newRows = [rows[i].totalCard,rows[i].id,rows[i].name, rows[i].age, rows[i].gender];
          cli_table.push(newRows)
        }

        console.log(cli_table.toString());
      }
    })

  })
  db.close()
}

// Driver Code
release0();
release1();
