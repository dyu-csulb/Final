const express = require('express');
const router = express.Router();

/*==================
  Page Routes
===================*/
router.get("/", (req, res) => { 
    res.render("index");
});

router.get("/ManageCustomer", (req, res) => { 
  res.render("manageCustomer");
});

router.get("/AddCustomer", (req, res) => { 
  res.render("addCustomer");
});



module.exports = router;