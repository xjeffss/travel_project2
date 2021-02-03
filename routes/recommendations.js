const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/:index', ctrl.recommendations.show);
router.get('/new/:index', ctrl.recommendations.renderNew);
router.get('/',ctrl.recommendations.newTravel);

module.exports = router;
