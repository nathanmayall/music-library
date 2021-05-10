const express = require('express');

const artist = express.Router();

const artistController = require('../controllers/artistController');

artist
  .route('/artist')
  .get(artistController.list)
  .post(artistController.insert);

artist
  .route('/artist/:artistId')
  .get(artistController.getOne)
  .patch(artistController.editOne)
  .delete(artistController.deleteOne);

module.exports = artist;
