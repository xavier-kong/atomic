import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import DailyTracker from './components/DailyTracker';
import GET_HABITS from './graphql/queries/getHabits';
import CHANGE_DONE from './graphql/mutations/changeDone';

const App = () => {
    const [habits, setHabits] = React.useState([]);
    const [changeDone, { loading, error }] = useMutation(CHANGE_DONE, {
        refetchQueries: [GET_HABITS, 'getHabits'],
    });

    useQuery(GET_HABITS, {
        onCompleted: (res) => {
            setHabits(res.allHabits);
        },
    });

    if (loading) console.log('Submitting...');
    if (error) console.log(`Submission error! ${error.message}`);

    const handleDone = async (data: { id: number; done: boolean }) => {
        const result = await changeDone({
            variables: { id: data.id, done: data.done },
        });
        console.log('res', result);
        // need to find way to update local cache with data
    };

    return (
        <div>
            <DailyTracker habits={habits} handleDone={handleDone} />
        </div>
    );
};

export default App;
