import { Snowflake } from '../../src/main';

const SnowflakeIDs = new Snowflake({ place_id: 1 });

const id = SnowflakeIDs.generate();
const resolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error('❌ Error');

console.log('✅ Success');
