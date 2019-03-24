const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
var routes = require("./routes/routes.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

routes(app);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});