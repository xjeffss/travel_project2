const User = require('../models').User;
const Recommendation = require('../models').Recommendation;
const State = require('../models').StateProvince;


const newTravel = (req, res) => {
    
    Recommendation.create(req.body)
    .then(newTravel => {
        console.log(newTravel);
        res.redirect('/recommendations/${newTravel.userId}');
    })
}

const show = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
                model: Recommendation,
            },           
        ]
    })
    .then(userProfile =>{
        console.log(userProfile.Recommendations);
        res.render('show.ejs',
        {
            user: userProfile,
                
        })  
        })
        
}

const renderNew = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
                model: Recommendation,
            },           
        ]
    })
    .then(userProfile =>{
        State.findAll()
        .then(states => {
            console.log(userProfile);
            res.render('new.ejs',
            {
                user: userProfile,
                states: states,
            })  
        })
        
    })
    
}

module.exports = {
    newTravel,
    show,
    renderNew,
}