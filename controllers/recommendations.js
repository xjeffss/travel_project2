const User = require('../models').User;
const Recommendation = require('../models').Recommendation;
const State = require('../models').StateProvince;


const newTravel = (req, res) => {
    
    Recommendation.create(req.body)
    .then(newTravel => {
        console.log(newTravel.userId);
        res.redirect(`/recommendations/${newTravel.userId}`);
    })
}

const index = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
                model: Recommendation,
            },           
        ]
    })
    .then(userProfile =>{
        console.log(userProfile.Recommendations);
        res.render('index.ejs',
        {
            user: userProfile,
                
        })  
        })
        
}

/*const index = (req, res) => {
    Recommendation.findAll( { where: {userId: req.body.index} } )
    .then(recommendations =>{
        console.log(recommendations);
        res.render('index.ejs',
        {
            recommendations: recommendations,
                
        })  
        })
        
}*/

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



//delete route
const deleteTravel = (req, res) => {
  Recommendation.destroy({ where: {id: req.params.index } } )
  .then(deletedTravel => {
    res.redirect(`/recommendations/${deletedTravel.userId}`);   
    })
};


//edit route
const editTravel = (req, res) => {
    Recommendation.findByPk(req.params.index)
    .then(editedTravel => {
        State.findAll()
        .then(states => {
            res.render('edit.ejs', {
                recommendation : editedTravel,
                states: states
        })
      
      })
    })   
};

//PUT method for the edit
const putTravel = (req, res) => {
  Recommendation.update(req.body, {
    where: { id: req.params.index },
    returning: true,
  } 
  )
  .then(updatedTravel => {
    console.log(updatedTravel.userId);
    res.redirect(`/recommendations/${updatedTravel.userId}`);
    
    });
};

//show route 
const showTravel = (req, res) => {
  Recommendation.findByPk(req.params.index, {
    include : [
      {
        model: StateProvince,
      },
    ]
  })
  .then(foundTravel => {
    console.log(foundTravel.stateName);
    res.render('show.ejs', {
    recommendation: foundTravel
    })
  });
};




module.exports = {
    newTravel,
    index,
    renderNew,
    deleteTravel,
    editTravel,
    putTravel,
    showTravel,
}