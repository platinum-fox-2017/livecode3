const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');

class Query {
    static show(){
        let query =`select Status.title, Status.point, Status.level, Players.name,Players.age,Players.gender
        from Status
        join Players
        on Status.playerId = Players.id
        order by 3 desc; `
        db.all(query,(err,rows)=>console.log(rows));
    }
    static show2(){
        let query =`select count(Cards.playerId) as totalcard, Players.id as playerI, Players.name, Players.age,Players.gender
        from Cards
        join Players
        on Cards.playerId = Players.id
        where Players.gender  like "male%"
        group by 2
        order by 1 desc
        limit 3`
        db.all(query,(err,rows)=>console.log(rows));
    }
}

Query.show();
Query.show2();



