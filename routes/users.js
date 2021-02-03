const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/travels', ctrl.users.show);
router.post('travels/login', ctrl.users.login);

module.exports = router;