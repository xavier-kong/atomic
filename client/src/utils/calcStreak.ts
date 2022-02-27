import { Progress } from '../types/SingleHabit';

const calcStreak = (progress: Progress[]) => {
    let streak = 0;
    while (streak < progress.length) {
        if (progress[streak].done) {
            streak += 1;
        } else {
            return streak;
        }
    }
    return streak + 1;
};

export default calcStreak;
