class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        return `${this._password}hitesh`
    }
    set password(value) {
        this._password = value
    }
}

const hitesh = new User("hitesh@google.com", "abc")
console.log(hitesh.password);