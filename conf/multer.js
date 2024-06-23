

const multer = require('multer');
const path = require('path');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
  
aws.config.update({
  accessKeyId: process.env.ACCESSKEY,
  secretAccessKey: process.env.SECRETACCESSKEY,
  region: "us-east-1",

});

const s3 = new aws.S3();
const upload = multer({ 
  storage: multerS3({

    s3: s3,
    bucket: "immuniecarteirinha",
    acl: "public-read",
    key(req,file,cb){
      cb(null, 'User_Image' + path.extname(file.originalname));
    }

  })

 });
 
module.exports = upload;
