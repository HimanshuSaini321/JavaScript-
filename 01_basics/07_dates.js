//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myTimeStamp = Date.now();


let myCreatedDate = new Date("01-14-2023");

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());



let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());




console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}))