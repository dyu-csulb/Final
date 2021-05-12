const express = require('express');
const router = express.Router();

/*==================
  Page Routes
===================*/
router.get("/", (req, res) => { 
    res.render("index");
});

router.get("/SumOfSeries", (req, res) => { 
  res.render("sumOfSeries");
});

router.get("/Import", (req, res) => { 
  res.render("import");
});



module.exports = router;