const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



router.get('/new', ctrl.recommendations.renderNew);
router.post('/new/:index', ctrl.recommendations.newTravel);
router.get('/:index', ctrl.recommendations.index);


router.get('/:index/edit', ctrl.recommendations.editTravel);

router.put('/:index', ctrl.recommendations.putTravel);

router.delete('/:index', ctrl.recommendations.deleteTravel);

router.get('/:index', ctrl.recommendations.showTravel);


module.exports = router;
