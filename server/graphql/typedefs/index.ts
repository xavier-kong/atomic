import { loadFile } from 'graphql-import-files';

const typeDefs = loadFile('./graphql/schema.graphql');

export default typeDefs;

// https://www.npmjs.com/package/graphql-import-files
