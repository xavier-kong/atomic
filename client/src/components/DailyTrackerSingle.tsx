import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import SingleHabit, { Progress } from '../types/SingleHabit';

interface PropTypes {
    habit: SingleHabit;
    handleDone: (data: { id: string; done: boolean }) => Promise<void>;
}

const calcStreak = (progress: Progress[]) => {
    let streak = 0;
    while (streak < progress.length) {
        if (progress[streak].done) {
            streak += 1;
        } else {
            return streak;
        }
    }
    return streak + 1;

    // need to check if last date is today or yesterday
};

const calcCheck = (progress: Progress[]) => {
    // check if first element is today
    // check if today is true
};

const DailyTrackerSingle = ({ habit, handleDone }: PropTypes) => {
    const {
        habit_uid: habitId,
        habit_name: habitName,
        amount,
        unit,
        progress,
    } = habit;
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        // use effect here to check if done
        console.log(calcStreak(progress));
    });

    const handleToggle = async () => {
        const newChecked = !checked;
        setChecked(newChecked);

        // create service to create new array for date
        await handleDone({
            id: habitId,
            done: newChecked,
        });
    };

    return (
        <ListItem
            secondaryAction={
                <Checkbox
                    edge="end"
                    onChange={handleToggle}
                    checked={checked}
                />
            }
        >
            <ListItemText
                primary={habitName}
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`${amount} ${unit}`}
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default DailyTrackerSingle;
