const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const dotenv = require('dotenv');
require('dotenv').config()

const path = require("path");
const app = express();

/*==================
  Server configuration
===================*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js/ui'))
app.use(express.urlencoded({ extended: false }));

/*==================
  Page Routes
===================*/
app.use('/', require('./controller/routes/pageRoutes'));
app.use('/SumOfSeries', require('./controller/routes/pageRoutes'));
app.use('/Import', require('./controller/routes/pageRoutes'));

/*==================
  API Routes
===================*/
app.use('/api/total', require('./controller/api/total'));
app.use('/api/add', require('./controller/api/add'));

/*==================
  Import/Export .csv file
===================*/
app.use('/ImportFile', require('./controller/routes/import'));


app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

/*==================
  Start Express Server
===================*/
app.listen(process.env.PORT || 5300, () => {
  console.log("Server started (http://localhost:5300/)!");
});

 