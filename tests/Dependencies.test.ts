import Package from '../package.json';

if (Package.dependencies['@types/node'] !== 'latest') throw new Error('❌ Error: @types/node');

console.log('✅ Success');
