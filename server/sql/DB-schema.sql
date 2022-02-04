CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE habits (
  user_uid UUID DEFAULT uuid_generate_v4 () NOT NULL PRIMARY KEY,
	habit_name VARCHAR(100) NOT NULL,
	amount INT(255) NOT NULL,
  unit VARCHAR(100) NOT NULL,
  UNIQUE(user_uid),
  UNIQUE(habit_name),
);

CREATE TABLE progress (
	group_uid UUID DEFAULT uuid_generate_v4 () NOT NULL PRIMARY KEY,
	group_name VARCHAR(100) NOT NULL,
	passphrase VARCHAR(200) NOT NULL,
  expiry_date TIMESTAMP NOT NULL,
  UNIQUE(group_uid),
  UNIQUE(group_name),
  UNIQUE(passphrase)
);

        {
            habitId: 1,
            date: "29/1/2022",
            done: true
        },