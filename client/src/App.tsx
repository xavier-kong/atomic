import React from 'react';
import { useQuery } from '@apollo/client';
import DailyTracker from './components/DailyTracker';
import GET_HABITS from './graphql/queries/getHabits';

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
