const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
    }
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

function chai() {
    console.log(this);
}

// chai();


const chai1 = () => {
    let username = "Himanshu"
    console.log(username);
}

chai1()



// ******* Implicit Return ***********

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(2,3));