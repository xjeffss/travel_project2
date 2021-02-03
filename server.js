const express = require("express");
const app = express();
const destinations = require('./models/destination.js');

const methodOveride = require('method-override');
const routes = require('./routes');

app.use(('/travels', routes.travels))

app.listen(3000, () => {
    console.log("Server is listening!!!")
});