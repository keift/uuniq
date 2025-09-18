import { Symbolic } from '../../src/main';

const SymbolicIDs = new Symbolic();

const id = SymbolicIDs.generate();
const resolve = SymbolicIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error('❌ Error');

console.log('✅ Success');
