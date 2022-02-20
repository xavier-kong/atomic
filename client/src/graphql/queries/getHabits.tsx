import { gql } from '@apollo/client';

const GET_HABITS = gql`
    query getHabits {
        allHabits {
            habit_uid
            habit_name
            amount
            unit
            progress {
                progress_uid
                habit_uid
                habit_date
                done
            }
        }
    }
`;

export default GET_HABITS;
