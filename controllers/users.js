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
    Recommendation.findByPk(req.body)
    .then(destination => {
        res.render(`/recommendation/${destination}`)
    })
}


const login = (req, res) => {
        User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
            })
            .then(foundPlayer=> { 
                res.redirect(`profile/${foundPlayer.id}`);
            })
        }
const newUser = (req, res) => {
    console.log("Hello")
    res.redirect('new.ejs')
    }

module.exports = {
    selectDest,
    show,
    login,
    newUser
  
}