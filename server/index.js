const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('../database/index.js');

const app = express();

app.use(express.static(`${__dirname} + /../client/dist`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`); });
