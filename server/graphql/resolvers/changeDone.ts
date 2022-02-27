import { context } from '../context';
import { Progress, Habits } from './resolvers-types';

export const changeDone = async (progress_uid: string, done: boolean) => {
    const updatedProgress = await context.prisma.progress.update({
        where: {
            progress_uid: progress_uid,
        },
        data: {
            done: done,
        },
    });

    return updatedProgress;
};
