import * as React from 'react';
import List from '@mui/material/List';
import SingleHabit from '../types/SingleHabit';
import DailyTrackerSingle from './DailyTrackerSingle';

interface Habits {
    habits: SingleHabit[];
}

const DailyTracker = ({ habits }: Habits) => (
    <List>
        {habits.map((habit) => (
            <DailyTrackerSingle {...habit} key={habit.id} />
        ))}
    </List>
);

export default DailyTracker;
