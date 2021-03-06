const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/travels', ctrl.users.show);
router.post('/travels/login', ctrl.users.login);
// router.get('/travels', ctrl.users.selectDest); need a different route
router.get('/users/destinations', ctrl.users.selectDest);
router.get('/users', ctrl.users.newUser);
router.post('/users', ctrl.users.addNewUser)
// router.get('/destinations', ctrl.users.selectDest)



module.exports = router;