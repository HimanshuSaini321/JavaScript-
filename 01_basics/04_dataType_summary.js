/* Primitive DataTypes (Call by Value)-> 
String, Number, BigInt, Symbol, Null, Undefined, Boolean.
These datatypes stored in Stack Memory
*/
let name = "Himanshu Saini";
let anotherName = name;
anotherName = "Chai Aur Code";

console.log(name);
console.log(anotherName);



// Non-Primitive (Heap Memory)

let userOne = {
    email: "himanshu@gmail.com",
    upi:"himanshu@okicici"
}
let userTwo = userOne;
userTwo.email = "bhajwalya@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);