/**
 * Driver Entity (ES6 Class)
 */

class Todo {
    constructor(code, doit, description, user_fk) {
        this.code = code;
        this.doit = doit;
        this.description = description;
        this.user_fk = user_fk;
    }
}

module.exports = Driver;