const express = require('express');
const router = express.Router();
const dummy = require('./dummy');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(dummy);
});

module.exports = router;
