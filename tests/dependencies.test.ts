import _package from '../package.json';

const dev_dependencies = {
  '@keyv/mongo': 'latest',
  keyv: 'latest',
  prettier: 'latest',
  rulint: 'latest',
  tsdown: 'latest',
  unrun: 'latest'
};

for (const [_dependency, version] of Object.entries(dev_dependencies)) {
  const dependency = _dependency as keyof typeof dev_dependencies;

  if (_package.devDependencies[dependency] !== version) throw new Error(`❌ Error: ${dependency}`);
}

console.log('✅ Success');
