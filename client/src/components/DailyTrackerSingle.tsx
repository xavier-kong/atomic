import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import SingleHabit from '../types/SingleHabit';

const DailyTrackerSingle = (habit: SingleHabit) => {
    const { name, amount, unit, done } = habit;
    const [checked, setChecked] = React.useState(done);

    const handleToggle = () => {
        const newChecked = !checked;
        setChecked(newChecked);
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
                primary={name}
                secondary={
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {`for ${amount} ${unit}`}
                    </Typography>
                }
            />
        </ListItem>
    );
};

export default DailyTrackerSingle;