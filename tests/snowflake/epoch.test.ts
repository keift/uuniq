import { Snowflake } from '../../src/main';

const snowflake = new Snowflake({ epoch: '2007-05-05', place_id: 2 });

const id = snowflake.generate();
const resolve = snowflake.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) {
  throw new Error('❌ Error');
}

console.log('✅ Success');
