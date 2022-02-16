import { gql } from 'apollo-server-core';

const typeDefs = gql`
    type Habits {
        habit_uid: ID!
        habit_name: String!
        amount: Int!
        unit: String!
    }

    type Progress {
        progres_uid: String!
        habit_uid: ID!
        habit_date: String!
        done: Boolean!
    }

    type Query {
        allHabits: [Habits]!
    }
`;

export default typeDefs;
