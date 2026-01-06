import Package from '../package.json';

if (Package.devDependencies['@keyv/mongo'] !== 'latest') throw new Error('❌ Error: @keyv/mongo');
if (Package.devDependencies.keyv !== 'latest') throw new Error('❌ Error: keyv');
if (Package.devDependencies.prettier !== 'latest') throw new Error('❌ Error: prettier');
if (Package.devDependencies.rulint !== 'latest') throw new Error('❌ Error: rulint');
if (Package.devDependencies.tsup !== 'latest') throw new Error('❌ Error: tsup');

console.log('✅ Success');
