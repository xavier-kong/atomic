export default interface SingleHabit {
    habit_uid: string;
    habit_name: string; // e.g. reading
    amount: number; // 30
    unit: string; // minutes, times
    progress: Progress[];
}

export interface Progress {
    progress_uid: string;
    habit_uid: string;
    habit_date: string;
    done: boolean;
}
