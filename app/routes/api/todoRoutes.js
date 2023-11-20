/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const TodoController = require('../../controller/todoController');
const todoController = new TodoController();

/**
 * Driver Entity routes
 */
router.get('/count', function (req, res) {
    todoController.countAll(res);
});

router.get('/exists/:code', function (req, res) {
    todoController.exists(req, res);
});

router.get('/:code', function (req, res) {
    todoController.findById(req, res)
});

router.get('/', function (req, res) {
    todoController.findAll(res);
});

router.put('/:code', function (req, res) {
    todoController.update(req, res)
});

router.post('/create', function (req, res) {
    todoController.create(req, res);
});

router.delete('/:code', function (req, res) {
    todoController.deleteById(req, res)
});

module.exports = router;