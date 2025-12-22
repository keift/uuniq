import { Snowflake } from '../../src/main';

const SnowflakeIDs = new Snowflake({ epoch: '2007-05-05', place_id: 1 });

const id = SnowflakeIDs.generate();
const resolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error('❌ Error');

console.log('✅ Success');
