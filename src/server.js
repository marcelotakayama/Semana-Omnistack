const express = require('express');
const server = express();

server.get('/', (req, res) => {
    return res.send("Hello Worlddddd");
});

server.listen(3333);