const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Connected to server!')
}); 

app.listen(3002, () => console.log('Service running on port 3002'));