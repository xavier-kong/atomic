import { context, Context } from '../context';
import { Resolvers } from './resolvers-types';

const resolvers: Resolvers = {
    Query: {
        allHabits: async () => {
            // check last date, if last date is not today, insert dates with done = false until today
            const data = await context.prisma.habits.findMany();
            const newData = data.map(async (habit) => {
                const progress = await context.prisma.progress.findMany({
                    where: {
                        habit_uid: habit.habit_uid,
                    },
                    orderBy: {
                        habit_date: 'desc',
                    },
                });
                return {
                    ...habit,
                    progress,
                };
            });
            return newData;
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
