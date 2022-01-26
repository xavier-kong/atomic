import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface Habits {
    habits: SingleHabit[];
}

interface SingleHabit {
    name: string; // e.g. reading
    description?: string; // e.g. Read a book
    amount: number; // 30
    unit: string; // minutes, times
}

const DailyTracker = ({ habits }: Habits) => (
    <List>
        {habits.map((habit) => (
            <ListItem
                secondaryAction={
                    <Checkbox
                        edge="end"
                        // onChange={handleToggle(value)}
                        // checked={checked.indexOf(value) !== -1}
                        // inputProps={{ 'aria-labelledby': labelId }}
                    />
                }
            >
                <ListItemText
                    primary={habit.name}
                    secondary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {`for ${habit.amount} ${habit.unit}`}
                        </Typography>
                    }
                />
            </ListItem>
        ))}
    </List>
);

export default DailyTracker;

/* 



*/
