const express = require('express');
const { createUser, getUser } = require('../controllers/userControllers');
const router = express.Router();

router.route('/user').post(createUser);

router.route('/user/:email').get(getUser);

module.exports = router;