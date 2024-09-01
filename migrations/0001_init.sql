-- Migration number: 0001 	 2024-09-01T03:44:57.869Z
create table endorsements
(
    discordID   integer not null
        constraint endorsements_pk
            primary key,
    discordName TEXT    not null,
    endorsed    TEXT not null
);
create table candidates (
    internalname TEXT not null
        constraint candidates_pk
            primary key,
    displayName TEXT not null
);
