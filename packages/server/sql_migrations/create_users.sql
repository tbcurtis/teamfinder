create table [IF NOT EXISTS ] request (
    id serial PRIMARY KEY ,
    creator text NOT NULL,
    player1 text,
    player2 text,
    player3 text,
    createdOn TIMESTAMP NOT NULL
)
SELECT * FROM request where( player1 is not null or player2 is not null or player3 is not null);