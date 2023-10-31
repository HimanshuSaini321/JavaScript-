// Singleton (Constructor)
// Object.create()


//Object Literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Saini",
    [mySym] : "mykey1",
    age: 25,
    location : "Meerut",
    email: "himanshu@webtropika.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}


//Ways to access object's element
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


// We can lock the element of object using object.freeze(object_name) method


JsUser.greeting = function () {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`);
}


console.log(JsUser.greetingTwo());