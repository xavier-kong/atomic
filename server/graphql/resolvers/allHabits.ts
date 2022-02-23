import { context } from '../context';
import { Progress } from './resolvers-types';

export const allHabits = async () => {
    const habits = await context.prisma.habits.findMany();
    const newData = habits.map(async (habit) => {
        const progress = await context.prisma.progress.findMany({
            where: {
                habit_uid: habit.habit_uid,
            },
            orderBy: {
                habit_date: 'desc',
            },
        });

        const updatedProgress = checkProgress(progress);
        return {
            ...habit,
            progress: updatedProgress,
        };
    });
    return newData;
};

const checkProgress = (progress: Progress[]) => {
    const today = new Date();
    today.setUTCHours(0);
    today.setUTCMinutes(0);
    today.setUTCSeconds(0);
    today.setUTCMilliseconds(0);

    console.log(today);

    // get current date
    // check for missing dates
    // add dates
    return progress;
};

/*
get habits
for each habit
    check progress
    if missing dates
        add missing dates as false to db
return habits

    // check last date, if last date is not today, insert dates with done = false until today
*/
