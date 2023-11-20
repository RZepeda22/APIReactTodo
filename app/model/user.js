/**
 * Car Entity (ES6 Class)
 */

class User {
    constructor(code, username, email, password, nombre, apellido,telefono,role,active) {
        this.code = code;
        this.username = username;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.role = role;
        this.active = active;
    }
}

module.exports = User;