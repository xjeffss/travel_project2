const User = require('../models').User;
const Destination = require('../models').Destination;
const Recommendation = require('../models').Recommendation;

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const newTravel = (req, res) => {
    
    Destination.create(req.body)
    .then(newFruit => {
        res.redirect('/users/profile/1'); /*hard coded for now */
    })
}