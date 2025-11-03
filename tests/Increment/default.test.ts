import { Increment } from '../../src/main';
import Keyv from 'keyv';
import KeyvMongo from '@keyv/mongo';

const IncrementIDs = new Increment({ store: new Keyv(new KeyvMongo('mongodb+srv://admin:0fdZV10ZcQoI4I10@cluster0.nastr0b.mongodb.net/app?retryWrites=true&w=majority&appName=Cluster0', { collection: 'uuniq' })) });

const id = await IncrementIDs.generate();

console.log(id);

console.log('✅ Success');
