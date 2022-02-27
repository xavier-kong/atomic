import { Progress } from '../types/SingleHabit';

const calcStreak = (progress: Progress[]) => {
    let streak = 1;
    while (streak < progress.length) {
        if (progress[streak].done) {
            streak += 1;
        } else {
            break;
        }
    }
    if (!progress[0].done) {
        streak -= 1;
    }
    return streak;
};

export default calcStreak;
