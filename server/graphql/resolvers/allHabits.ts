import { context } from '../context';
import { Progress, Habits } from './resolvers-types';

export const allHabits = async () => {
    const habits = await context.prisma.habits.findMany();
    const newData = habits.map(async (habit) => {
        const progress = await getProgress(habit);

        await checkProgress(progress);

        const updatedProgress = await getProgress(habit);

        return {
            ...habit,
            progress: updatedProgress,
        };
    });
    return newData;
};

const checkProgress = (progress: Progress[]) => {
    const today = createTodayDate().getTime();
    const recent = progress[0].habit_date.getTime();
    const diff = (today - recent) / (1000 * 60 * 60 * 24);

    for (let i = 0; i < diff; i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        insertToDb(progress[0], date);
    }

    return progress;
};

const createTodayDate = () => {
    const today = new Date();
    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);
    return today;
};

const insertToDb = async (progress: Progress, date: Date) => {
    await context.prisma.progress.create({
        data: {
            habit_uid: progress.habit_uid,
            habit_date: date,
            done: false,
        },
    });
};

const getProgress = async (habit: Habits) => {
    const progress = await context.prisma.progress.findMany({
        where: {
            habit_uid: habit.habit_uid,
        },
        orderBy: {
            habit_date: 'desc',
        },
    });

    return progress;
};
