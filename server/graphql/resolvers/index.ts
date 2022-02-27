import { context, Context } from '../context';
import { Resolvers } from './resolvers-types';
import { allHabits } from './allHabits';
import { changeDone } from './changeDone';

const resolvers: Resolvers = {
    Query: {
        allHabits: async () => {
            const res = await allHabits();
            return res;
        },
    },
    Mutation: {
        changeDone: async (parent, args) => {
            const { progress_uid, done } = args;
            const res = await changeDone(progress_uid, done);
            return res;
        },
    },
};

export default resolvers;
