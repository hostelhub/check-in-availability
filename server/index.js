const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Hostel } = require('../database/index.js');
const mongoose = require('../database/index.js');

const app = express();

app.use(express.static(`${__dirname} + /../client/dist`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hostels/:hostelId', (req, res) => {
  const id = req.params.hostelId;
  Hostel.find({ hostelId: id }, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.send(info);
    }
  });
});

const port = 1234;
app.listen(port, () => { console.log(`Listening on port ${port}`); });
