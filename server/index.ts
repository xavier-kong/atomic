import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, gql } from 'apollo-server-core';
import express from 'express';
import http from 'http';

const prisma = new PrismaClient();

async function main() {
    const allHabits = await prisma.habits.findMany();
    console.log(allHabits);
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

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

const resolvers = {
    Query: {
        allHabits: async () => {
            const data = await main();
            return data;
        },
    },
};

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    );
    console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
}

startApolloServer(typeDefs, resolvers);
