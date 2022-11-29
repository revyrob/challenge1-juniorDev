const express = require("express");
const app = express();
const fs = require("fs");

/*
 *read videoData.json file
 */
function loadVideosData(callback) {
  fs.readFile("./data/videoData.json", "utf8", callback);
}

/*
 *write the videoData.json file
 */
function saveVideoData(data) {
  fs.writeFile("./data/videoData.json", data, (err) => {
    if (err) {
      console.error(err);
    }
    //file written successfully, if no error
  });
}

/*
 *Get all the videos
 *I would think it would be in here where I change the data taken
 *in from the larger file
 */
app.get("/", (req, res) => {
  loadVideosData((err, data) => {
    if (err) {
      res.send("error while getting video data");
      //loop throug the data just taking the
      //information that is used for the small json
      //title, image, channgel, id
    } else {
      const videos = JSON.parse(data);
      res.status(200).json(videos);
    }
  });
});

app.post("/", function (req, res) {
  res.send("this is the endpoint");
});

app.delete("/", function (req, res) {
  res.send("yeah we are not actually deleting anything");
});

app.listen(8080, function () {
  console.log("Hello our server is up and running");
});
