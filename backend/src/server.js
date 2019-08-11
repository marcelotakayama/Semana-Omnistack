const express = require('express');
const mongoose = require('mongoose');
// O cors permite que o react utilize a API
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@clusterapi-zoq3q.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);