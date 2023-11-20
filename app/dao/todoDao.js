/* Load Driver entity */
const Todo = require('../model/todo');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Driver Data Access Object
 */
class TodoDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(code) {
        let sqlRequest = "SELECT code, doit, description, user_fk FROM todo WHERE code=$code";
        let sqlParams = {$code: code};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Todo(row.code, row.doit, row.description, row.user_fk));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM todo";
        return this.common.findAll(sqlRequest).then(rows => {
            let todos = [];
            for (const row of rows) {
                todos.push(new Todo(row.code, row.doit, row.description, row.user_fk));
            }
            return todos;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM todo";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Driver
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Todo) {
        let sqlRequest = "UPDATE todo SET " +
            "doit=$doit, " +
            "description=$description, " +
            "user_fk=$user_fk " +
            "WHERE code=$code";

        let sqlParams = {
            $doit: Todo.doit,
            $description: Todo.description,
            $user_fk: Todo.user_fk,
            $code: Todo.code
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Driver
     * returns database insertion status
     */
    create(Todo) {
        let sqlRequest = "INSERT into todo (doit, description, user_fk) " +
            "VALUES ($doit, $description, $user_fk)";
        let sqlParams = {
            $doit: Todo.doit,
            $description: Todo.description,
            $user_fk: Todo.user_fk
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided in the database
     * @params Driver
     * returns database insertion status
     */
    /*createWithId(Driver) {
        let sqlRequest = "INSERT into driver (id, firstName, lastName, car) " +
            "VALUES ($id, $firstName, $lastName, $car)";
        let sqlParams = {
            $id: Driver.id,
            $firstName: Driver.firstName,
            $lastName: Driver.lastName,
            $car: Driver.car
        };
        return this.common.run(sqlRequest, sqlParams);
    };*/

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(code) {
        let sqlRequest = "DELETE FROM todo WHERE code=$code";
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
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = TodoDao;