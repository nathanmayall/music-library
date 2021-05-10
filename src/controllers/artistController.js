/* eslint-disable no-unused-expressions */
const getDb = require('../services/db');

const list = async (_, res, next) => {
  const db = await getDb();

  try {
    const [artists] = await db.query('SELECT * from Artist');
    res.status(200).send(artists);
  } catch (err) {
    console.log(err);
    next(err);
  }
  db.close();
};

const insert = async (req, res, next) => {
  const db = await getDb();
  const { name, genre } = req.body;

  try {
    await db.query('INSERT INTO  Artist (name, genre) VALUES (?, ?)', [
      name,
      genre,
    ]);
    res.status(201).json(req.body);
  } catch (err) {
    console.log(err);
    next(err);
  }

  db.close();
};

const getOne = async (req, res, next) => {
  const { artistId } = req.params;
  const db = await getDb();
  try {
    const [[result]] = await db.query('SELECT * from Artist WHERE id = ?', [
      artistId,
    ]);

    result ? res.status(200).send(result) : res.sendStatus(404);
  } catch (err) {
    console.log(err);
    next(err);
  }
  db.close();
};

const editOne = async (req, res, next) => {
  const { artistId } = req.params;

  const data = req.body;

  const db = await getDb();

  try {
    const [{ affectedRows }] = await db.query(
      'UPDATE Artist SET ? WHERE id = ?',
      [data, artistId]
    );

    affectedRows ? res.sendStatus(200) : res.sendStatus(404);
  } catch (err) {
    console.log(err);
    next(err);
  }

  db.close();
};

const deleteOne = async (req, res, next) => {
  const { artistId } = req.params;

  const db = await getDb();

  try {
    const [{ affectedRows }] = await db.query(
      'DELETE from Artist WHERE id = ?',
      [artistId]
    );

    affectedRows ? res.sendStatus(200) : res.sendStatus(404);
  } catch (err) {
    console.log(err);
    next(err);
  }

  db.close();
};

module.exports = {
  list,
  insert,
  getOne,
  editOne,
  deleteOne,
};
