const User = require('../models').User;
const Recommendation = require('../models').Recommendation;
const StateProvince = require('../models').StateProvince;

const show = (req, res) => {
    StateProvince.findAll({

      })  
    .then(allStateProvince => {
        // console.log(allStateProvince) 
        Recommendation.findAll()
        .then(allRecommendation => {
         
            res.render('show.ejs', {
            stateprovince: allStateProvince,
            recommendation: allRecommendation    
        })
        }
        )}
        )}

const selectDest = (req,res) => {
    console.log("hello")
    Recommendation.findAll()
    .then(destination => {
        res.render('showDest.ejs')
        recommendation: destination
    })
}

// const showDest = (req, res =>)

const login = (req, res) => {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            } 
            }) 
            .then(foundPlayer=> { 
                res.redirect(`/recommendations/${foundPlayer.id}`);
                
                console.log(`${foundPlayer.id}`)
            })
        }
const newUser = (req, res) => {
    res.render('newUser.ejs')
    } 

const addNewUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        // console.log(`${req.body}`)
        res.redirect(`/recommendations/${newUser.id}`);
})
}

module.exports = {
    selectDest,
    show,
    login,
    newUser,
    addNewUser
  
}