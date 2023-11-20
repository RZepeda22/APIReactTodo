/* Load Car Data Access Object */
const UserDao = require('../dao/userDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const User = require('../model/user');

/**
 * Car Controller
 */
class UserController {

    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let code = req.params.code;

        this.userDao.findById(code)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

        /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
        findByIdentificador(req, res) {
            let identificador = req.body.identificador;
            if (identificador.includes("@")) {
                this.userDao.findByEmail(identificador)
                .then(this.common.findSuccess(res))
                .catch(this.common.findError(res));
             }
             else {
                this.userDao.findByUsername(identificador)
                .then(this.common.findSuccess(res))
                .catch(this.common.findError(res));
             }
            
        };

     




    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.userDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let user = new User();
        user.code = req.body.code;
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.nombre = req.body.nombre;
        user.apellido = req.body.apellido;
        user.telefono = req.body.telefono;
        user.role = req.body.role;
        user.active = req.body.active;
        return this.carDao.update(car)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let user = new User();
        if (req.body.code == null) {
            user.code = req.body.code;
        }
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.nombre = req.body.nombre;
        user.apellido = req.body.apellido;
        user.telefono = req.body.telefono;
        user.role = req.body.role;
        user.active = req.body.active;

        if (!(req.body.code == null)) {
           /* return this.carDao.createWithId(car)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));*/
        }
        else {
            return this.userDao.create(user)
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

        this.userDao.deleteById(code)
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

        this.userDao.exists(code)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = UserController;