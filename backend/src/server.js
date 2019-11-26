const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // return res.json({ message: `Hellooooo ${req.query.name}`});
    return res.send(`Bem vindo ao mundo JS, ${req.query.name}`);
});

app.listen(3000, '0.0.0.0');
