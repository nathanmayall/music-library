const express = require('express');

const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');

const app = express();

app.use(express.json());

app.use(artistRoute);
app.use(albumRoute);

module.exports = app;
