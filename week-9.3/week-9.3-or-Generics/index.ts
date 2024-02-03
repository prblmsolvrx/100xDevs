/*
1. Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
How would you solve this problem?*/

/*
ugly approach

function firstElement(arr:(number | String)[]){
  return arr[0];
}
*/

//clean and better approach without generic
type Input = number | String
function firstElement(arr:Input[]){
  return arr[0];
}



//What is the problem in the above approach?
/*
1.User can send different types of values in inputs, without any type errors
*/
function getFirstElement1(arr: (string | number)[]) {
  return arr[0];
}
const el1 = getFirstElement1([1, 2, '3']);
/*
2.Typescript isn’t able to infer the right type of the return type
*/
function getFirstElement2(arr: (string | number)[]) {
  return arr[0];
}
const el2 = getFirstElement2(["harkiratSingh", "ramanSingh"]);
console.log(el2.toLowerCase());

/*
Solution using - Generics
Generics enables you to create components that work with any data type while still providing compile-time type safety.
*/

//Simple Example of Generics
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);

//Solution to original problem using Generics
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase());

/*issues that generics helps in*/

//1.User can send different types of values in inputs, without any type errors
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const el = getFirstElement<string>(["harkiratSingh", 2]);
console.log(el.toLowerCase())
//2.Typescript isn’t able to infer the right type of the return type
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())