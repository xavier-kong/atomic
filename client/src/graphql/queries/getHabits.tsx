import { gql } from '@apollo/client';

const GET_HABITS = gql`
    query getHabits {
        allHabits {
            name
            amount
            unit
            done
        }
    }
`;

export default GET_HABITS;
