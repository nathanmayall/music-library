const express = require('express');
const morgan = require('morgan');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const artistRoute = require('./routes/artist');
const albumRoute = require('./routes/album');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(express.json());
app.use(morgan('tiny'));

app.use(artistRoute);
app.use(albumRoute);

module.exports = app;
