const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => res.json({info: 'Smart Home App'}));

app.get('/getVoltage', (req, res) => {
    res.send('3,3V');
});

app.get('/getTemperature', (req, res) => {
    res.send('25,5°C');
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;