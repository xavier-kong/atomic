export default interface SingleHabit {
    name: string; // e.g. reading
    description?: string; // e.g. Read a book
    amount: number; // 30
    unit: string; // minutes, times
    done: boolean;
}
