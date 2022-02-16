import { context, Context } from '../context';

const resolvers = {
    Query: {
        allHabits: async () => {
            const data = await context.prisma.habits.findMany();
            return data;
        },
        // please find way to gen
        allProgress: async (parent: any, args: any) => {
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
