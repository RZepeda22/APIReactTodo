/* Load Car entity */
const User = require('../model/user');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class UserDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(code) {
        let sqlRequest = "SELECT code, username, email, password, nombre, apellido,telefono,role,active FROM user WHERE code=$code";
        let sqlParams = {$code: code};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new User(row.code, row.username, row.email, row.password, row.nombre, row.apellido, row.telefono, row.role, row.active));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM user";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(row.code, row.username, row.email, row.password, row.nombre, row.apellido, row.telefono, row.role, row.active));
            }
            return users;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM user";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Car
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(User) {
        let sqlRequest = "UPDATE user SET " +
            "username=$username, " +
            "email=$email, " +
            "password=$password, " +
            "nombre=$nombre " +
            "apellido=$apellido " +
            "telefono=$telefono " +
            "role=$role " +
            "active=$active " +
            "WHERE code=$code";

        let sqlParams = {
            $username: User.username,
            $email: User.email,
            $password: User.password,
            $nombre: User.nombre,
            $apellido: User.apellido,
            $telefono: User.telefono,
            $role: User.role,
            $active: User.active,
            $code: User.code
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Car
     * returns database insertion status
     */
    create(User) {
        let sqlRequest = "INSERT into user ( username, email, password, nombre, apellido,telefono,role,active ) " +
            "VALUES ($username, $email, $password, $nombre, $apellido, $telefono, $role, $active)";
            let sqlParams = {
                $username: User.username,
                $email: User.email,
                $password: User.password,
                $nombre: User.nombre,
                $apellido: User.apellido,
                $telefono: User.telefono,
                $role: User.role,
                $active: User.active,
            };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided id in the database
     * @params Car
     * returns database insertion status
     */
    /*createWithId(Car) {
        let sqlRequest = "INSERT into car (id, maker, model, year, driver) " +
            "VALUES ($id, $maker, $model, $year, $driver)";
        let sqlParams = {
            $id: Car.id,
            $maker: Car.maker,
            $model: Car.model,
            $year: Car.year,
            $driver: Car.driver
        };
        return this.common.run(sqlRequest, sqlParams);
    };*/

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(code) {
        let sqlRequest = "DELETE FROM user WHERE code=$code";
        let sqlParams = {$code: code};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(code) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM user WHERE code=$code";
        let sqlParams = {$code: code};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = UserDao;