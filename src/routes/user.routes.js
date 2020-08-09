const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.list);
router.post('/add', userController.save);

module.exports = router;
