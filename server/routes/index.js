const express = require('express');
const requestHandler = require('../requestHandler');
const router = express.Router();

router.post('/sort', (req, res) => {
  let input = req.body.inputStr;
  let result = requestHandler(input);
  res.status(201).send(result);
});

module.exports = router;
