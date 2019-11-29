const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send(`Bem vindo ao mundo JS ${req.query.name}`);
});

app.listen(8080);

