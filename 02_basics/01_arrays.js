//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);

console.log(myArr2);

//Arrays Methods

console.log(myArr.concat(myHeros));

myArr2.push(20);
console.log(myArr2);

myArr2.unshift(0);
console.log(myArr2);

myArr2.pop();
myArr2.shift();

console.log(myArr2);


/* Array and String conversion

Array.Join() -> Convert to String
String.split() -> convert to Array 
*/

// Slice and Splice 