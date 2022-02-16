import { context, Context } from '../context';

const resolvers = {
    Query: {
        allHabits: async () => {
            const data = await context.prisma.habits.findMany();
            return data;
        },
    },
};

export default resolvers;
