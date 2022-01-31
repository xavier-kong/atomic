import * as React from 'react';
import List from '@mui/material/List';
import SingleHabit from '../types/SingleHabit';
import DailyTrackerSingle from './DailyTrackerSingle';

interface Habits {
    habits: SingleHabit[];
    handleDone: (data: { id: number; done: boolean }) => Promise<void>;
}

// need to define prop types better, include the functions too?

const DailyTracker = ({ habits, handleDone }: Habits) => (
    <List>
        {habits.map((habit) => (
            <DailyTrackerSingle
                habit={habit}
                key={habit.id}
                handleDone={handleDone}
            />
        ))}
    </List>
);

export default DailyTracker;
