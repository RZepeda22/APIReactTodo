/* Load Driver Data Access Object */
const TodoDao = require('../dao/todoDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Driver entity */
const Todo = require('../model/todo');

/**
 * Driver Controller
 */
class TodoController {

    constructor() {
        this.todoDao = new TodoDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let code = req.params.code;
        this.todoDao.findById(code)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findByEmail(req, res) {
        let email = req.params.identificador;
        this.todoDao.findByEmail(email)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findByUsername(req, res) {
        let username = req.params.identificador;
        this.todoDao.findByUsername(username)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };



    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.todoDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {
        this.todoDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let todo = new Todo();
        todo.code = req.body.code;
        todo.doit = req.body.doit;
        todo.description = req.body.description;
        todo.user_fk = req.body.user_fk;

        return this.todoDao.update(todo)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let todo = new Todo();
        if (req.body.code == null) {
            todo.code = req.body.code;
        }
        todo.doit = req.body.doit;
        todo.description = req.body.description;
        todo.user_fk = req.body.user_fk;

        if (!(req.body.code == null) ) {
            /*return this.driverDao.createWithId(driver)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));*/
        }
        else {
            return this.todoDao.create(todo)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let code = req.params.code;

        this.todoDao.deleteById(code)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let code = req.params.code;

        this.todoDao.exists(code)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = TodoController;