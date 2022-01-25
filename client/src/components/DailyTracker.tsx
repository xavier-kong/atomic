import * as React from 'react';

interface Habits {
    habits: [SingleHabit];
}

interface SingleHabit {
    name: string; // e.g. reading
    description: string; // e.g. Read a book
    type: string; // duration, monthly, weekly etc
    amount: number; // 30
    unit: string; // minutes
    start: string; // 1/1/2022 10:30 timestamps?
    // interval:
}

const DailyTracker = ({ habits }: Habits) => <p>{habits}</p>;

export default DailyTracker;
