var express = require('express');
var router = express.Router();
const fs = require("fs");


router.get('/get', (req, res, next) => {
  return res.status(200).json({ test: "whatever" });
});

router.post('/add', (req, res, next) => { 

  return res.status(200).json({  });
});


module.exports = router;