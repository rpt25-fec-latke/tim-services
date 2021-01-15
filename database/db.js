const { Seeder } = require('mongo-seeding');

const config = {
  database: 'mongodb://127.0.0.1:27017/mydatabase',
  dropDatabase: true,
}

const seeder = new Seeder(config);

seeder
  .import(collections)
  .then(() => {
    // Successful Import
  })
  .catch(err => {
    console.log('Error connecting to MongoDB: ', err);
  });


const defaultConfig = {
  database: {
    protocol: 'mongodb',
    host: '127.0.0.1',
    port: 27017,
    name: 'database',
    username: undefined,
    password: undefined,
  },
  databaseReconnectTimeout: 10000,
  dropDatabase: false,
  dropCollections: false,
  options: undefined,
}

