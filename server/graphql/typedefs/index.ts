import { gql } from 'apollo-server-core';

const typeDefs = gql`
    type Habits {
        habit_uid: ID!
        habit_name: String!
        amount: Int!
        unit: String!
        progress: [Progress]
    }

    type Progress {
        progress_uid: String!
        habit_uid: ID!
        habit_date: String!
        done: Boolean!
    }

    fragment ProgressFragment on Progress {
        progress_uid
        habit_uid
        habit_date
        done
    }

    type Query {
        allHabits: [Habits]!
        allProgress(habit_uid: ID!): [Progress]!
    }
`;

export default typeDefs;
