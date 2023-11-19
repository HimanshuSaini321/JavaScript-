const user = {
    username: "himanshu",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function () {
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// Constructor Function


// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, signedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = User("himanshu", 8, true);
const userTwo = User('ChaiAurCode', 11, false);
console.log(userOne.constructor);