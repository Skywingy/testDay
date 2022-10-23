const express = require("express");
const app = express();
const logger = require("morgan");
const wiki = require("./wiki");

app.use(logger("dev"));

const port = 3000;

wiki.get('/', function(req, res){
  res.sendFile(path.join('./index.html'));
});

app.use(wiki);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Its's okay, you are doing great, get chill ✔️✔️✔️`)
});
