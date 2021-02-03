const User = require('../models').User;
const Recommendation = require('../models').Recommendation;
const StateProvince = require('../models').StateProvince;

const show = (req, res) => {
    StateProvince.findAll({

      })  
    .then(allStateProvince => {  
        Recommendation.findAll(
        ).then(allRecommendation => {
            console.log(allRecommendation)    
            res.render('show.ejs', {
            stateprovince: allStateProvince,
            recommendation: allRecommendation    
        })
        }
        )}
        )}
const login = (req, res) => {
        Player.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
            })
            .then(foundPlayer=> { 
                res.redirect(`profile/${foundPlayer.id}`);
            })
        }

module.exports = {

    show,
    login,
  
}