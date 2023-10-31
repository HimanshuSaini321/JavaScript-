const tinderUser = {}

tinderUser.id = "4qsdg"
tinderUser.name = "Himanshu"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Himanshu",
            lastName:"Saini"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "b", 4: "c" }

// const obj3 = Object.assign({},obj1, obj2);
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


