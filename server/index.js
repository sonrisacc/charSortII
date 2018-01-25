const express = require('express');
const bodyParse = require('body-parser');
const router = require('./routes/index');

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static('client'));

app.use('/api', router);

const HOST = 'localhost';
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
