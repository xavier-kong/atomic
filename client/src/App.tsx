import React from 'react';
import { useQuery } from '@apollo/client';
import DailyTracker from './components/DailyTracker';
import GET_HABITS from './graphql/queries/getHabits';

// interface SingleHabit {
//     name: string; // e.g. reading
//     description?: string; // e.g. Read a book
//     amount: number; // 30
//     unit: string; // minutes, times
//     done: boolean;
// }

const App = () => {
    const [habits, setHabits] = React.useState([]);

    useQuery(GET_HABITS, {
        onCompleted: (data) => {
            setHabits(data.allHabits);
        },
    });

    return (
        <div>
            <DailyTracker habits={habits} />
        </div>
    );
};

export default App;
