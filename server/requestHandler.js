const express = require('express');
const bodyParse = require('body-parser');
const router = require('./routes');

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static('client'));
app.use('api', router);

module.exports = app;
