const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Hostel } = require('../database/index.js');

const app = express();

app.use('/hostels/:hostelId', express.static(`${__dirname} + /../client/dist`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hostels/:hostelId', (req, res) => {
  const Id = req.params.hostelId;
  Hostel.find({ hostelId: Id }, (err, info) => {
    if (err) {
      res.sendStatus(404);
    } else {
      const bookedDays = [];
      for (let i = 0; i < info[0].bookedDates.length; i += 1) {
        bookedDays.push(info[0].bookedDates[i]);
      }
      res.status(200).send(bookedDays);
    }
  });
});


const port = 3002;
app.listen(port, () => { console.log(`Listening on port ${port}`); });
