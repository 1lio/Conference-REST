const config = require('./config/config');

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const db = require('./config/db');
const exp = require('./config/express');

exp.configureExpress(app);
db.connectDB();

server.listen(config.port, () => console.log(`Server started http://${config.host}:${config.port}/api/info`));
