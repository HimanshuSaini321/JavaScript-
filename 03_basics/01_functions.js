function sayMyName() {
    let name = "Himanshu";
    console.log(name);
}

// sayMyName();

function addTwoNumber(num1, num2) {
    return num1 + num2;
}


// console.log(addTwoNumber(3,5));

function loginUserMessage(username) {
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Himanshu"));

const user = {
    username: "Himanshu",
    price: 299
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

