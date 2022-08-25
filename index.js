console.log("hello world!");

// create function
function fun() {
  console.log("hello function");
}
fun(); //call function

function greeting(yourName) {
  result = "Hello" + " " + yourName; //string concatenation
  console.log(result);
}
// var name = prompt("Whats your name");
// greeting(name)

// how do arguments work in functions?

function sumNumbers(num1, num2) {
  console.log(num1 + num2);
}
sumNumbers(10, 20);

// while loop
/*let num  = 0;
while (num < 100) {
    num += 5;
    console.log(num)
}*/

// for loop

for (let num = 0; num <= 100; num++) {
  console.log(num);
}

// data types
let yourAge = 18; //number
let yourName = "Gokul"; //string
let someName = { first: "gokul", last: "pradap" }; //Object
let truth = false; //boolean
// let groceries  = [apple, mango, banana]; //array
let random; //undefined
let nothing = null; //null

// strings in javascript (common methods)

let fruit = "banana";
// let fruits = "banana\napple\nguva"; // new line \n
console.log(fruit.length);
console.log(fruit.indexOf("na"));
console.log(fruit.slice(1, 3));
console.log(fruit.replace("ban", "123"));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5));
console.log(fruit[2]);
console.log(fruit.split(","));

// Array
let fruits = ["banana", "apple", "mango", "Orenge"];
fruits = new Array("banana", "apple", "mango", "Orenge");
// fruits[0] = "pear"
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits.toString());
console.log(fruits.pop(), fruits);
console.log(fruits.push("papaya"), fruits);
fruits[fruits.leangth] = "new fruit";
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("kiwi");
console.log(fruits);

let vegetables = ["dfssdf", "fdgdfg", "fdgf"];
let allGroceries = fruits.concat(vegetables); //combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(2, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let numbers = [1, 2, 85, 12, 55, 121, 644, 84, 545, 78, 645, 77];
console.log(numbers);
console.log(numbers.sort());
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
console.log(
  numbers.sort(function (a, b) {
    return b - a;
  })
);

let emptyNumber = [];

for (let num = 0; num < 10; num++) {
  emptyNumber.push(num);
}
console.log(emptyNumber);

// Objects in Javascript

let student = { 
    first: "gokul", 
    last: "pradap", 
    age: 25, 
    height: 170,
    studentinfo: function(){
        return this.first+ '\n' + this.last+ '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
student.first = "gokulparadap"
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student. studentinfo())


// conditionals, Control flows (if else)
//18-35 is my target demographic
var age = 45; //prompt("whats your age")
if ( (age >= 18) && (age <= 35)){
status = "target demo"
console.log(status);
}else{
    status = "not my audience"   
    console.log(status);
}

// switch statements
// difference b/w weekday vs weekend
// day 0 --> Sunday
// day 6 --> Saturday

switch (2) {
    case 0: 
    text = "weekend";
    break;
    case 6: 
    text = "weekend";
    break;
    default : 
    text = "weekday";
    break;
}
console.log(text);