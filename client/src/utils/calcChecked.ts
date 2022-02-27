import { Progress } from '../types/SingleHabit';

const calcChecked = (progress: Progress[]) => {
    const date = new Date(progress[0].habit_date);
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear() &&
        progress[0].done === true
    );
};

export default calcChecked;
