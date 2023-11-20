/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/user', require('./api/usersRoutes'));
router.use('/todo', require('./api/todoRoutes'));

module.exports = router;