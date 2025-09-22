import { Symbolic } from '../../src/main';

const SymbolicIDs = new Symbolic({ place_id: 1 });

const id = SymbolicIDs.generate();
const resolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (resolve.place_id !== 1) throw new Error('❌ Error');

console.log('✅ Success');
