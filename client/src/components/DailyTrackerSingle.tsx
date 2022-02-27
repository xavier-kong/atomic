import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import SingleHabit from '../types/SingleHabit';
import calcStreak from '../utils/calcStreak';
import calcChecked from '../utils/calcChecked';

interface PropTypes {
    habit: SingleHabit;
    handleDone: (data: { id: string; done: boolean }) => Promise<void>;
}

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
        const newChecked = calcChecked(progress);
        setChecked(newChecked);
        const newStreak = calcStreak(progress);
        setStreak(newStreak);
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
                    borderRadius: '50%',
                    border: 1,
                    height: '50px',
                    width: '50px',
                    mx: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
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
