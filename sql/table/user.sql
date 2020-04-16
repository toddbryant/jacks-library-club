USE jacks_library_club;

CREATE TABLE IF NOT EXISTS user (
	uid int,
	hashed_password varchar(64),
	uname varchar(64),
	email varchar(128)
);

