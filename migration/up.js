const Client = require('../db');
const { pgcrypto, clientTable } = require('./queries');

Client.connect()
  .then(async () => {
    const pgCryptoQ = await Client.query(pgcrypto);

    console.log('pgCrypto', pgCryptoQ);
  })
  .then(async () => {
    const clienTableQ = await Client.query(clientTable);

    console.log('clientTableQ', clienTableQ);
  })
  .then(() => process.exit(1))
  .catch(err => {
    console.log('Some error on connection', err);
    process.exit(1);
  });
