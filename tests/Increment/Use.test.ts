import { Increment } from '../../src/main';
import Keyv from 'keyv';
import KeyvMongo from '@keyv/mongo';

const UuniqStore = new Keyv(new KeyvMongo('mongodb+srv://admin:0fdZV10ZcQoI4I10@cluster0.nastr0b.mongodb.net/app', { collection: 'uuniq' }));

const IncrementIDs = new Increment({ store: UuniqStore });

const id = await IncrementIDs.generate();

console.log(id);

console.log('✅ Success');
