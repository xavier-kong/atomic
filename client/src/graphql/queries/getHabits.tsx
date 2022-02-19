import { gql } from '@apollo/client';

const GET_HABITS = gql`
    query getHabits {
        allHabits {
            habit_uid
            habit_name
            amount
            unit
            progress {
                ...ProgressFragment
            }
        }
    }
`;

export default GET_HABITS;
