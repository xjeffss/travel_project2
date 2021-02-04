const express = require("express");


//include the method-override package
const methodOverride = require('method-override');
const routes = require('./routes');

const app = express();

app.use(express.static("public"));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));


app.use('/', routes.travels);
app.use('/recommendations', routes.recommendations);
// app.use('/destinations', routes.destinations)


app.listen(3000, () => {
    console.log("Travelpedia Server is listening!!!")
});