const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const upload = multer({
  storage: multer.memoryStorage(),
});

const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const uploadFiletoS3 = async (file) => {
  const fileKey = uuidv4();
  // Get the file extension if needed
  // const ext = file.originalname.split('.')[1];

  const params = {
    Body: file.buffer,
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
  };
  try {
    await s3.putObject(params).promise();

    return `${process.env.AWS_BUCKET_URL}/${fileKey}`;
  } catch (err) {
    return err;
  }
};

module.exports = { upload, uploadFiletoS3 };
