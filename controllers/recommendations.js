/*const User = require('../models').User;
const Destination = require('../models').Destination;
const Recommendation = require('../models').Recommendation;

const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
                model: Recommendation,
            },
            {
                model: Destination,
            }
        ]
    })
    .then(userProfile =>{
        res.render('users/profile.ejs',
        {
            user: userProfile
        })
    })

}

module.exports = {
    renderProfile,
}*/