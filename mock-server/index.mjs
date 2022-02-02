import { graphql } from 'graphql';
import pkg from 'json-graphql-server';
const {jsonSchemaBuilder} = pkg;
import data from './db.js'

// const data = { };



const schema = jsonSchemaBuilder(data);
const query = `[...]`

graphql(schema, query).then(result => {
  console.log(result);
});