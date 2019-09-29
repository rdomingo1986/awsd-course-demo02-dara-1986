var AWS = require('aws-sdk');
var fs = require('fs');

var s3 = new AWS.S3({
  accessKeyId: '',
  secretAccessKey: '',
  region: ''
});

s3.createBucket({
  Bucket: 'awsd-course-demo02-dara-1986'
}, function(err, response) {
  if(err) return console.log('createBucket error: ', err);
  console.log('createBucket response: ', response);

  s3.putObject({
    Bucket: 'awsd-course-demo02-dara-1986',
    Key: 'image-aws.png',
    Body: fs.readFileSync('aws.png')
  }, function (err, response) {
    if(err) return console.log('putObject error: ', err);
    console.log('putObject response: ', response);
  });
});