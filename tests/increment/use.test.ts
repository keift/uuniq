import { Increment } from '../../src/main';
import Keyv from 'keyv';
import KeyvMongo from '@keyv/mongo';

const uuniq_store = new Keyv(new KeyvMongo('mongodb+srv://admin:0fdZV10ZcQoI4I10@cluster0.nastr0b.mongodb.net/app', { collection: 'uuniq' }));

const increment = new Increment({ place_id: 0, store: uuniq_store });

const id = await increment.generate();

console.log(id);

console.log('✅ Success');
