import React from 'react';
import DailyTracker from './components/DailyTracker';

interface SingleHabit {
    name: string; // e.g. reading
    description?: string; // e.g. Read a book
    amount: number; // 30
    unit: string; // minutes, times
    done: boolean;
}

const habits: SingleHabit[] = [
    {
        name: 'read',
        amount: 10,
        unit: 'minutes',
        done: false,
    },
    {
        name: 'leetcode',
        amount: 1,
        unit: 'times',
        done: true,
    },
];

const App = () => (
    <div>
        <DailyTracker habits={habits} />
    </div>
);

export default App;
