const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;


app.use(express.static(__dirname + '/../client/dist'));
app.get('/', (req, res) => {
  console.log("Connected to Server!");
  res.end();
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});