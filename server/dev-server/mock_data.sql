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


-- Need to figure out how to get date then manipulate via date - int from generate series 

-- INSERT INTO progress

-- SELECT id, concat('Product ', id) 

-- FROM GENERATE_SERIES(1, current_setting('my.number_of_products')::int) as id;

-- https://stackoverflow.com/questions/41305146/psql-generate-series-how-to-use-it-to-populate-multiple-columns-in-a-table
-- https://stackoverflow.com/questions/7794679/inserting-values-generate-series-how-can-i-reuse-cycle-the-numbers-e-g-1-2