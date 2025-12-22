import { Snowflake } from '../../src/main';

const SnowflakeIDs = new Snowflake({ format: 'symbolic', place_id: 5 });

const resolve = SnowflakeIDs.resolve('T8Qu56ki');

console.log(JSON.stringify(resolve));

if (resolve.created_at !== '2025-03-14T11:36:05.528Z') throw new Error('❌ Error');

console.log('✅ Success');
