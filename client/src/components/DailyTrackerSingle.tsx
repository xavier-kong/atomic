import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
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
};

const calcCheck = (progress: Progress[]) => {
    const date = new Date(progress[0].habit_date);
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear() &&
        progress[0].done === true
    );
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
    const [streak, setStreak] = React.useState(0);

    React.useEffect(() => {
        const newChecked = calcCheck(progress);
        setChecked(newChecked);
        const newStreak = calcStreak(progress);
        setStreak(newStreak);
        console.log(streak);
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
            <ListItemAvatar
                sx={{
                    bgcolor: 'red',
                    borderRadius: '50%',
                    border: 1,
                    height: '50px',
                    width: '50px',
                }}
            >
                <Typography variant="button">{streak}</Typography>
            </ListItemAvatar>
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
