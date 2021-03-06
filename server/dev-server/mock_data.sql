DO $$
DECLARE temp_habit_uid UUID;
DECLARE curr_date DATE;

BEGIN

    INSERT INTO habits (habit_name, amount, unit) VALUES ('Read', 10, 'minutes')
    RETURNING habit_uid INTO temp_habit_uid;

    curr_date := NOW();

    INSERT INTO progress (habit_uid, habit_date, done)
    SELECT temp_habit_uid, (curr_date - i), true
    FROM GENERATE_SERIES(1, 8) as i;

    INSERT INTO habits (habit_name, amount, unit) VALUES ('Leetcode', 1, 'times')
    RETURNING habit_uid INTO temp_habit_uid;

    INSERT INTO progress (habit_uid, habit_date, done)
    SELECT temp_habit_uid, (curr_date - i), false
    FROM GENERATE_SERIES(1, 3) as i;
    
END $$;

SELECT * FROM progress;
SELECT * FROM habits;