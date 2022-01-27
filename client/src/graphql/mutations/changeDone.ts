import { gql } from '@apollo/client';

const CHANGE_DONE = gql`
    mutation ChangeDone($id: ID!, $done: Boolean) {
        updateHabit(id: $id, done: $done) {
            id
            name
            amount
            unit
            done
        }
    }
`;

export default CHANGE_DONE;
