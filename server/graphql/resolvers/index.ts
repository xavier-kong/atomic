import { context, Context } from '../context';
import { Resolvers } from './resolvers-types';
import { allHabits } from './allHabits';

const resolvers: Resolvers = {
    Query: {
        allHabits: async () => {
            const res = await allHabits();
            return res;
        },
    },
};

export default resolvers;
