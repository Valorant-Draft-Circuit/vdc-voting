-- Migration number: 0002 	 2024-09-01T20:30:05.370Z
alter table candidates
    add stage TEXT default 'pending' not null;