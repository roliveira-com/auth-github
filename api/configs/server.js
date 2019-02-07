const express = require("express");
const bodyParser = require("body-parser");
const oauth = require('../routes/auth');
const cors = require('./cors')

const app = express();

app.use(bodyParser.json());
app.use(cors);

app.use('/oauth', oauth);

module.exports = app;