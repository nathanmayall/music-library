const express = require('express');
const morgan = require('morgan');

const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use(artistRoute);
app.use(albumRoute);

module.exports = app;
