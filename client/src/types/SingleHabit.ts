export default interface SingleHabit {
    id: number;
    name: string; // e.g. reading
    description?: string; // e.g. Read a book
    amount: number; // 30
    unit: string; // minutes, times
    done: string[]; // '15/1/2022
}
