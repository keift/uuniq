import { Snowflake } from '../../src/main';

const snowflake = new Snowflake({ place_id: 4 });

const id_0 = snowflake.generate();
const id_1 = snowflake.generate();
const resolve_0 = snowflake.resolve(id_0);
const resolve_1 = snowflake.resolve(id_1);

console.log(id_0, JSON.stringify(resolve_0));
console.log(id_1, JSON.stringify(resolve_1));

if (resolve_0.created_at === resolve_1.created_at && resolve_0.sequence === resolve_1.sequence) {
  throw new Error('❌ Error');
}

console.log('✅ Success');
