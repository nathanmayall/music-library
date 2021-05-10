const express = require('express');

const artistRoute = require('./routes/artist');
const albumRoute = require('./controllers/album');

const app = express();

app.use(express.json());

app.use(artistRoute);
app.use(albumRoute);

module.exports = app;
