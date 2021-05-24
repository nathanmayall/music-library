const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const upload = multer({
  storage: multer.memoryStorage(),
});

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const uploadFiletoS3 = async (file) => {
  const fileKey = uuidv4();

  const params = {
    Body: file.buffer,
    Bucket: process.env.BUCKET_NAME,
    Key: fileKey,
  };
  try {
    await s3.putObject(params).promise();
    return `${process.env.BUCKET_URL}/${fileKey}`;
  } catch (err) {
    return err;
  }
};

module.exports = { upload, uploadFiletoS3 };
