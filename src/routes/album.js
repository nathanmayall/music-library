const express = require('express');
const { upload } = require('../controllers/uploadFileController');

const album = express.Router();

const albumController = require('../controllers/albumController');

album.route('/albums').get(albumController.getAll);

album
  .route('/artists/:artistId/albums')
  .get(albumController.listAllFromArtist)
  .post(upload.single('file'), albumController.insert);

album
  .route('/artists/:artistId/albums/:albumId')
  .get(albumController.getOne)
  .patch(albumController.changeOne)
  .delete(albumController.deleteOne);

module.exports = album;
