const express = require("express");
const app = express();


const methodOverride = require('method-override');
const routes = require('./routes');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(('/travels', routes.travels));
// app.use(('/recommendations', routes.travels))
app.use(methodOverride('_method'));

app.listen(3000, () => {
    console.log("Server is listening!!!")
});