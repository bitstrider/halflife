import mimic from 'mimic';
const mocks = require.context(__dirname + '/mocks', true, /\.json$/);
mocks.keys().forEach((key) => mimic.import(JSON.stringify(mocks(key))));
