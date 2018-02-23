## Release 0

```sql
select Status.title, Status.point, Status.level, Players.name, Players.age, Players.gender
from Status
join Players on Status.playerId = Players.id
order by Status.level desc
```

## Release 1

```sql
select count(*) as totalcard, Cards.playerId , Players.name, Players.age, Players.gender
from Cards
join Players on Cards.playerId = Players.id
where Players.gender = 'Male'
group by Cards.playerId
order by totalcard desc
limit 3
```