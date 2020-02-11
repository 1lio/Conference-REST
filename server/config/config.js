// Add to .gitignore before deploy
const host = '185.195.26.71';
const localhost = '127.0.0.1';

module.exports = {

    // config
    enableDB: true,

    // server
    host: localhost,
    clientPort: '8080',
    port: process.env.PORT || 3000,

    //db
    dbHost: localhost,
    dbPort: 27017,
    dbName: 'elsu',
    dbUrl: `mongodb://${localhost}/elsu`,
};
