const express = require('express');
const userController = require('../controller/user');

const router = express.Router();
// TODO move implementation to controller and service layer
router.get('/user/:id', userController.getUser);

module.exports = router;
