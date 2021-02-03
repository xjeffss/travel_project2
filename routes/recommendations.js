const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



router.get('/new', ctrl.recommendations.renderNew);
router.post('/new/:index', ctrl.recommendations.newTravel);
router.get('/:index', ctrl.recommendations.show);

module.exports = router;
