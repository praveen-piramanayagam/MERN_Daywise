// function
let a = 10;
function arrfunc1(){
    console.log(a);
}
arrfunc1();

// Arrow fn
let arrfunc = () => {
    console.log("Arrow function");
}
arrfunc();


// higher order fn
function hof(){
    console.log("higher order function_1");
    return function returnfn(){
        console.log("higher order return function");
    }
    
}
let var1=hof();
var1();  

var id1 = 2;
var class1 = (id1=1) ? "true" : "false";
console.log(class1); 

// if

let age = 21;
if (age >= 18) {
        console.log("You are eligible to vote.");
      } else {
        console.log("You are not eligible to vote.");
      }
      
      let score = 75;

//       if else if
      if (score >= 90) {
        console.log("Grade: A");
      } else if (score >= 80) {
        console.log("Grade: B");
      } else if (score >= 70) {
        console.log("Grade: C");
      } else {
        console.log("Grade: F");
      }
      
//       Nested if

      let year = 2024;
      let isLeapYear;
      
      if (year % 4 === 0) {
        if (year % 100 === 0) {
          if (year % 400 === 0) {
            isLeapYear = true;
          } else {
            isLeapYear = false;
          }
        } else {
          isLeapYear = true;
        }
      } else {
        isLeapYear = false;
      }
      
      console.log(isLeapYear ? "Leap year" : "Not a leap year");

// switch case
      let color = "yellow";
let fruit;

switch (color) {
  case "red":
    fruit = "Apple";
    break;
  case "yellow":
    fruit = "Banana";
    break;
  case "green":
    fruit = "Kiwi";
    break;
  case "orange":
    fruit = "Orange";
    break;
  default:
    fruit = "Unknown fruit";
}

console.log(fruit); // Output: Banana

// while loop
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

// do while
let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);


// for loop
for (let k = 0; k < 5; k++) {
        console.log(k);
      }
// slice method in array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];



let slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits);
console.log(fruits);

// splice

let fruits2 = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
let removedFruits = fruits2.splice(1, 2, "Blueberry", "Coconut");

console.log(removedFruits);
console.log(fruits2);

// Filtering 
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// Mapping elements
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

// json Object.keys and Object.values
let person = {
        name: "John",
        age: 30,
        city: "New York"
      };
      
      let keys = Object.keys(person);
      console.log("Keys:", keys);
      
      // Getting values
      let values = Object.values(person);
      console.log("Values:", values);
      
      // Iterating over keys and values
      keys.forEach(function(key) {
        console.log(key + ": " + person[key]);
      });


// Iteration over json in array
      
      let people = [
        { "name": "John", "age": 30 },
        { "name": "Jane", "age": 25 },
        { "name": "Doe", "age": 40 }
      ];
      
      people.forEach(function(person) {
        console.log(person.name + " is " + person.age + " years old.");
      });
      

      
