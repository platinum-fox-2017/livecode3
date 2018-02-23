/*
RELEASE 0

SELECT DISTINCT title, point, level, name, age, gender 
FROM players INNER JOIN status 
ON players.id = status.playerId order by level desc;
*/

/*
RELEASE 1

SELECT * FROM PLAYERS INNER JOIN CARDS on players.id = cards.playerId where gender='Male' limit 3;
*/