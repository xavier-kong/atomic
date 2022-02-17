import { context, Context } from '../context';
import { Resolvers } from './resolvers-types';

const resolvers: Resolvers = {
    Query: {
        allHabits: async () => {
            const data = await context.prisma.habits.findMany();
            return data;
        },
        allProgress: async (parent, args) => {
            const data = await context.prisma.progress.findMany({
                where: {
                    habit_uid: args.habit_uid,
                },
            });
            return data;
        },
    },
};

export default resolvers;
