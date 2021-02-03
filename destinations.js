
const User = require('./models').User;
const Country = require('./models').Country;

const show = (req, res)

// const show = (req, res) => {
//     Fruit.findByPk(req.params.index, {
//         include: [{
//             model: User,
//             attributes: ['name'],
//         },
//         {
//             model: Season,
//         }
//     ],
//         attributes: ['name', 'color', 'readyToEat']
//     })
//     .then(fruit => {
//         res.render('show.ejs', {
//             fruit: fruit
//         });
//     })
// }