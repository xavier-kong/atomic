DO $$
DECLARE temp_habit_uid UUID;
BEGIN
    INSERT INTO habits (habit_name, amount, unit) VALUES ('Read', 10, 'minutes')
    RETURNING habit_uid INTO temp_habit_uid;

    INSERT INTO progress (habit_uid, habit_date, done) VALUES (temp_habit_uid, '2/2/2022', false);

    INSERT INTO habits (habit_name, amount, unit) VALUES ('Leetcode', 1, 'times')
    RETURNING habit_uid INTO temp_habit_uid;

    INSERT INTO progress (habit_uid, habit_date, done) VALUES (temp_habit_uid, '2/2/2022', true);
END $$;

SELECT * FROM progress;
SELECT * FROM habits;