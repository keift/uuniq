import { Snowflake } from '../../src/main';

const snowflake = new Snowflake({ place_id: 3 });

const id = snowflake.generate();
const resolve = snowflake.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 3) {
  throw new Error('❌ Error');
}

console.log('✅ Success');
