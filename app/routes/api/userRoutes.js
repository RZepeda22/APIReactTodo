/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const UserController = require('../../controller/userController');
const userController = new UserController();

/**
 * Car Entity routes
 */
router.get('/count', function (req, res) {
    userController.countAll(res);
});

router.get('/exists/:code', function (req, res) {
    userController.exists(req, res);
});

router.get('/:code', function (req, res) {
    userController.findById(req, res);
});

router.get('/identificador', function (req, res) {
    userController.findByIdentificador(req, res);
});



router.get('/', function (req, res) {
    userController.findAll(res);
});

router.put('/:code', function (req, res) {
    userController.update(req, res);
});

router.post('/create', function (req, res) {
    userController.create(req, res);
});

router.delete('/:code', function (req, res) {
    userController.deleteById(req, res);
});

module.exports = router;