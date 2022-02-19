import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import SingleHabit from '../types/SingleHabit';

interface PropTypes {
    habit: SingleHabit;
    handleDone: (data: { id: string; done: boolean }) => Promise<void>;
}

const DailyTrackerSingle = ({ habit, handleDone }: PropTypes) => {
    const { habit_uid: habitId, habit_name: habitName, amount, unit } = habit;
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        // use effect here to check if done
        console.log(habitId, habitName);
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
