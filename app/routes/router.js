/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/user', require('./api/userRoutes'));
router.use('/todo', require('./api/todoRoutes'));
//router.use('/', require('./api/publicRoutes.js'));
module.exports = router;