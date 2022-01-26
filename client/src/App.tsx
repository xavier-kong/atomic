import React from 'react';
import DailyTracker from './components/DailyTracker';

interface Habit {
    name: string; // e.g. reading
    description?: string; // e.g. Read a book
    amount: number; // 30
    unit: string; // minutes, times
}

const habits: Habit[] = [
    {
        name: 'read',
        amount: 10,
        unit: 'minutes',
    },
    {
        name: 'leetcode',
        amount: 1,
        unit: 'times',
    },
];

const App = () => (
    <div>
        <DailyTracker habits={habits} />
    </div>
);

export default App;
