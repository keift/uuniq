import { Snowflake } from '../../src/main';

const numeric_snowflake = new Snowflake({ format: 'numeric', place_id: 0 });
const symbolic_snowflake = new Snowflake({ format: 'symbolic', place_id: 1 });

const numeric_resolve = numeric_snowflake.resolve('102604921389056');
const symbolic_resolve = symbolic_snowflake.resolve('T8Qu56ki');

console.log(JSON.stringify(numeric_resolve));
console.log(JSON.stringify(symbolic_resolve));

if (numeric_resolve.created_at !== '2025-03-14T11:35:07.409Z') {
  throw new Error('❌ Error: Numeric');
}

if (symbolic_resolve.created_at !== '2025-03-14T11:36:05.528Z') {
  throw new Error('❌ Error: Symbolic');
}

console.log('✅ Success');
