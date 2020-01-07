var port = process.env.PORT || 8000; //sets local server port to 8888
var express = require('express'); // Express web server framework
var request = require('request');
var fs = require('fs');
var cors = require('cors');
var app = express();

const multer = require('multer');
const upload = multer({dest: __dirname + '/'});

console.log("Running on port " + port);

async function imageVision(file) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');
  const linkify = require('linkifyjs');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.textDetection(file);
  const detections = result.textAnnotations;
  if (detections[0]) {
    const text = parseStr(detections[0].description);
    return linkify.find(text);
  } else {
    return [];
  }
}

function parseStr(text) {
  var formatted = "";
  for (char in text) {
    if (text[char] == "\n" && char > 0 && text[char - 1] == "-") {
      formatted += "";
    } else if (text[char] == "\n") {
      formatted += " ";
    } else {
      formatted += text[char];
    }
  }
  return formatted;
}
app.use(cors());
app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  imageVision(req.file.path).then(data => res.json(data));
  //Immediately delete the file after upload is complete. Don't want to store user's pics.
  fs.unlink(req.file.path, () => {console.log("Removed image from server.")});
});

app.get('/upload', function(req, res) {
  res.send('<form method="post" enctype="multipart/form-data">'
    + '<p>Image: <input type="file" name="image"/></p>'
    + '<p><input type="submit" value="Upload"/></p>'
    + '</form>');
});

app.listen(port, function() {});
