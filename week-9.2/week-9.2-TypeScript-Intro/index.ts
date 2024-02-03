function greet(firstname:String){
  console.log(`Hello ${firstname}`);
}
greet("soumik");

function sum(a:number,b:number):number{
  return a+b;
}
console.log(sum(2,3));

function isLegalx1(age: number) {
  if (age > 18) {
      return true;
  } else {
      return false
  }
}
console.log(isLegalx1(2));

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}
delayedCall(function() {
    console.log("hi there");
})

/*Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.*/
interface User {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  email?:string
}
function isLegalx2(user: User) {
  if (user.age > 18) {
      return true;
  } else {
      return false
  }
}
console.log(isLegalx2)

//Implementing interfaces

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

/*What are types?
Very similar to interfaces , types let you aggregate data together.*/
type UserX = {
  firstName: string;
  lastName: string;
  age: number
}



//Types in Typescript - Very similar to interfaces , types let you aggregate data together. OR and AND
//Union or Intersection in types.
type Userz = {
  firstName: string;
  lastName: string;
  age: number
}

//1.Unions - or-|
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202

//2.Intersection -and-&
type EmployeeX = {
  name: string;
  startDate: Date;
};
type ManagerX = {
  name: string;
  department: string;
};
type TeamLead = EmployeeX & ManagerX;
const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};

//Arrays in TS

//1.Given an array of positive integers as input, return the maximum value in the array

function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i]
      }
  }
  return max;
}
console.log(maxValue([1, 2, 3]));

//2.Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "harkirat",
    lastName: "Singh",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}]));



