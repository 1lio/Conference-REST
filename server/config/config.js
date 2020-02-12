// Add to .gitignore before deploy
const host = '10.8.0.13';
const localhost = '127.0.0.1';

module.exports = {

    // config
    enableDB: true,

    // server
    host: host,
    clientPort: '8080',
    port: process.env.PORT || 3000,

    //db
    dbHost: host,
    dbPort: 27017,
    dbName: 'elsu',
    dbUrl: `mongodb://${localhost}/elsu`,
};
