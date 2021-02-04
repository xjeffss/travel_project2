const express = require("express");


//include the method-override package
const methodOverride = require('method-override');
const routes = require('./routes');

const app = express();


const methodOverride = require('method-override');
const routes = require('./routes');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(('/travels', routes.travels));
app.use('/recommendations', routes.recommendations);
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log("Travelpedia Server is listening!!!")
});