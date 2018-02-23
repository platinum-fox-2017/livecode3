console.log("soal===1===");

SELECT title, point, level, name, age
FROM Players
JOIN Status
ON Players.id = Status.playerId
ORDER BY level DESC

console.log("soal==2===");
SELECT COUNT(*) AS totalCard, Cards.playerId, Players.name, Players.age, Players.gender
FROM Cards
JOIN Players
ON Cards.playerId = Players.id
WHERE Players.gender = 'Male'
GROUP BY Cards.playerId
ORDER BY totalCard DESC
LIMIT 3
