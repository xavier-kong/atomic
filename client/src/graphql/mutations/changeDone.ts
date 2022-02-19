import { gql } from '@apollo/client';

const CHANGE_DONE = gql`
    mutation ChangeDone($id: String!, $done: Boolean!) {
        updateHabit(id: $id, done: $done) {
            id
            done
        }
    }
`;

export default CHANGE_DONE;
