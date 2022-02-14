CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE habits (
  habit_uid UUID DEFAULT uuid_generate_v4 () NOT NULL PRIMARY KEY,
	habit_name VARCHAR(100) NOT NULL,
	amount INT NOT NULL,
  unit VARCHAR(100) NOT NULL,
  UNIQUE(habit_uid),
  UNIQUE(habit_name)
);

CREATE TABLE progress (
  progress_uid UUID DEFAULT uuid_generate_v4 () NOT NULL PRIMARY KEY,
  habit_uid UUID REFERENCES habits(habit_uid) NOT NULL,
	habit_date DATE NOT NULL,
  done BOOLEAN NOT NULL,
  UNIQUE(progres_uid)
);