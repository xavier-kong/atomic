import { context, Context } from '../context';
import { Resolvers } from './resolvers-types';
import { allHabits } from './allHabits';

const resolvers: Resolvers = {
    Query: {
        allHabits: async () => {
            const res = await allHabits();
            return res;
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
