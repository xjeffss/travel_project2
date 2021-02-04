const User = require('../models').User;
const Recommendation = require('../models').Recommendation;
const StateProvince = require('../models').StateProvince;

const show = (req, res) => {
    StateProvince.findAll({

      })  
    .then(allStateProvince => {
        // console.log(allStateProvince) 
        Recommendation.findAll(
        ).then(allRecommendation => {
              
            res.render('show.ejs', {
            stateprovince: allStateProvince,
            recommendation: allRecommendation    
        })
        }
        )}
        )}

const selectDest = (req,res) => {
    console.log("hello")
    Recommendation.findByPk(req.params.index)
    .then(destination => {
        res.redirect(`/recommendation/${destination}`)
    })
}


const login = (req, res) => {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password,
            } 
            }) 
            .then(foundPlayer=> { 
                res.redirect(`profile/${foundPlayer.id}`);
                console.log(`${foundPlayer.id}`)
            })
        }
const newUser = (req, res) => {
    res.render('new.ejs')
    } 

const addNewUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`/users/${newUser}`)
})
}

module.exports = {
    selectDest,
    show,
    login,
    newUser,
    addNewUser
  
}