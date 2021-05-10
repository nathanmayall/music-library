const express = require('express');

const album = express.Router();

const albumController = require('../controllers/albumController');

album.route('/albums').get(albumController.getAll);

album
  .route('/artist/:artistId/album')
  .get(albumController.list)
  .post(albumController.insert);

album
  .route('/artist/:artistId/album/:albumId')
  .get(albumController.getOne)
  .patch(albumController.changeOne)
  .delete(albumController.deleteOne);

module.exports = album;
