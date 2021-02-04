const express = require("express");


//include the method-override package
const methodOverride = require('method-override');
const routes = require('./routes');

const app = express();

//after app has been defined, use methodOverride.  
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
app.use(express.urlencoded( {extended: true}));

/*app.use('/users', routes.users);*/
app.use('/recommendations', routes.recommendations);


//middleware - should be at the top after require
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});



app.listen(3000, () => {
    console.log("Travelpedia Server is listening!!!")
});