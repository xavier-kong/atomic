// import { gql } from 'apollo-server-core';

// const typeDefs = gql`
//     type Habits {
//         habit_uid: ID!
//         habit_name: String!
//         amount: Int!
//         unit: String!
//         progress: [Progress]
//     }

//     type Progress {
//         progress_uid: String!
//         habit_uid: ID!
//         habit_date: String!
//         done: Boolean!
//     }

//     fragment ProgressFragment on Progress {
//         progress_uid
//         habit_uid
//         habit_date
//         done
//     }

//     type Query {
//         allHabits: [Habits]!
//         allProgress(habit_uid: ID!): [Progress]!
//     }
// `;
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';

const getSchema = async () => {
    const schema = await loadSchema('../schema.graphql', {
        // load from a single schema file
        loaders: [new GraphQLFileLoader()],
    });
    console.log(schema);

    return schema;
};

const typeDefs = getSchema();
export default typeDefs;
