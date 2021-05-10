const express = require('express');

const artist = express.Router();

const artistController = require('../controllers/artistController');

artist.route('/artist').get(artistController.list);

artist.route('/artist').post(artistController.insert);

artist.route('/artist/:artistId').get(artistController.getOne);

artist.route('/artist/:artistId').patch(artistController.editOne);

artist.route('/artist/:artistId').delete(artistController.deleteOne);

module.exports = artist;
