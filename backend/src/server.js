const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();

const databaseURI = 'mongodb://mongo:27017/sect2019'

mongoose.connect(
    databaseURI,
    {
        useNewUrlParser: true,
        autoIndex: false
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.error(`[SERVER_ERROR] MongoDB initial connection errors:`, error);
        // process.exit(1);
    })

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(8080);

