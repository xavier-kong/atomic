import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import DailyTracker from './components/DailyTracker';
import GET_HABITS from './graphql/queries/getHabits';
import CHANGE_DONE from './graphql/mutations/changeDone';

const App = () => {
    const [habits, setHabits] = React.useState([]);
    const [changeDone] = useMutation(CHANGE_DONE, {
        refetchQueries: [GET_HABITS, 'getHabits'],
    });

    useQuery(GET_HABITS, {
        onCompleted: (res) => {
            setHabits(res.allHabits);
        },
    });

    const handleDone = async (data) => {
        await changeDone(data);
    };

    return (
        <div>
            <DailyTracker habits={habits} />
        </div>
    );
};

export default App;
