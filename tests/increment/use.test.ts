import { Increment } from '../../src/main';
import Keyv from 'keyv';
import KeyvSqlite from '@keyv/sqlite';

const uuniq_store = new Keyv(new KeyvSqlite('sqlite://tests/increment/database.sqlite'));

const increment = new Increment({ place_id: 0, store: uuniq_store });

const id = await increment.generate();

console.log(id);

console.log('✅ Success');
