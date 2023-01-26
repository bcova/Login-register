const client = require('./client');
const { rebuildDb } = require('./seed-data');


rebuildDb()
  .catch(console.error)
  .finally(() => client.end());