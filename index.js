// inline comment
/*
multi line comment.
*/

// Data types:
/* 
 undefined, null boolean, string, symbol, number, and object
*/

// var  --> scope is throughout the program
// var myName = "abcd"; 
// let   --> only for a specific scope
// let outName = "ABCD";
// const
// const pi = 3.14;

// remainder operator

// var remainder;
// remainder = 11 % 3 -- assigns 2 to remainder

// a = a+12; is same as a+= 12;
// a = a -6; is same as a-= 6;
// a = a*5; is same as a*= 5;
// a = a/5; is same as a/= 5;

// strings --> can use ` ` or ' ' or " "

// How to put "" inside a string??
/*
var myStr = "I am a "double quoted" string inside "double quotes"  --> this will geive error since the double string part of the line will not be treates inside the string
var myStr = "I am a \"double quoted"\ string inside \"double quotes\" "  --> this will be shown as I am a "double quoted" string inside "double quotes".
if we want js engine to escape a " then we need to put \ infront of it. \ is known as the escape character.
NOTE: But if we use '' to denote a string then " inside the strings will be treated as characters inside strings and there will be no problem.
*/

/*
 CODE       OUTPUT
 \'         single quote
 \"         double quote
 \\         backslash
 \n         newline
 \r         carriage return
 \t         tab
 \b         backspace
 \f         form feed
*/

//Concatenating Strings with Plus Operator

/*
var ourStr = "I come first. " + "I come second.";
can also write this as,
var ourStr = "I come first. ";
ourStr += "I come second.";
output:       I come first. I come second.
*/

//Constructing Strings with Variables

/*
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr);
OUTPUT: Hello, our name is freeCodeCamp, how are you?
*/

//Appending Varibales to Strings
/*var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

console.log(anAdjective);
OUTPUT: freeCodeCamp is awesome!
*/

//Finding the length of the string
/*
var firstNameLength = 0;
var firstName ="Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);
OUTPUT: 3
*/

//Bracket Notation to Find First Character in String

/*var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];  sets the variable to A 
                         firstName[1]; sets the variable to d
*/

// String Immutability
/* 
var myStr = "Jello World";
myStr[0] = "H";
doesn't change myStr to Hello World due to srring immtatbility
to change it corerctly we must rewrite the whole string
myStr = "Hello World";  --> this we change the string
*/

//Finding nth letter in the name
/*var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length-1];  we are doing -1 because the index starts from 0.
this way we can get any letter of the string
*/

// Word Blanks 
/*
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result = "";
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
*/

//Array

/*
var ourArray = ["John", 23];  first element is a string, second element is a number.

var myArray = ["Quincy", 1];
*/

//Nested Array
/*
var myArray = [["Bulls", 23], ["White Sox", 45]];
*/

// Access Array Data with Indices
/*
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50
*/

//Modify Arrays with Indices
/*
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray is now equals [18, 45, 99].
*/

//Access Multi-Dimensional Arrays
/*
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]] the last array inside is [10,11,12], 13, 14 --> even it is a multi-dimensional array.
var myData = myArray[2][1]   --> this will access 3rd element which is an array and then 2nd element inside the 3rd array.
*/

//push()
/*
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
*/

//pop()    --> removes last element in an array
/* 
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
removedFromOurArrat now equals 3, and ourArray now equals [1,2]

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray) --> will print  [["John, 23"]]
*/

//shift()   --> removes first element in ab=n array
/*
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]
*/

//unshift
/*
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift(); ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
ourArray now equals ["Happy", "J", "cat"]
*/

//Shopping List
/*
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]
*/

//Functions
/* 
Write Reusable codes with Function.
function ourReusableFunction(){
  console.log("Heyya, World");
}
call this function:
ourReusableFunction();

Functions with arguments:
function ourFunctionWithArgs(a,b){
  console.log(a-b);
}
ourFunctionWithArgs(10, 5);  --> outputs 5
*/

//Scope of the Variable
/*
if we define a variable outside a function  --> Global variable
if we define a variable inside a function   --> Local variable
NOTE: if we define a variable inside the function but dont use the  'var ' keyword (just write the name of the varibale and initialize it in the same line, WITHOUT WRITING 'VAR' KEYWORD) it will have global scope
      but we might also get error for not writing 'VAR" keyword.

1. if both local and global variable have same name local variable is given priority.
*/

//Return a value from a function.
/*
function minusSeven(num){
  return num - 7;
}

console.log(minusSeven(10));  --> returns 3.
*/

// Undefined values returned by functions
/*
if functions don't have any return satements and we console.log the function it will be undefined
*/

//Assignment with a Returned Value
/*
var changed = 0;

function change(num){
  return (num + 5)/3;
}

changed = change(10);
*/

//Stand in Line
/* 
Queue Model
function nextInLine(arr, item){
  arr.push(item);
  return arr.shift();
}

var testArr = {1,2,3,4,5};

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSOn.stringify(testArr));
OUTPUT:
Before: [1,2,3,4,5]
1  --> since we used shift() it removed the first element.
After: [2,3,4,5,6]  --> since we used push() it added 6 to the end of the array.
*/

//Boolean Values
/*
has only two values:
true/false

Eg. function welcomeToBooleans(){
  return true;
}
*/

//if statements
/*
function ourTrueOrfalse(isItTrue){
  if(isItTrue){  // IF the variable isItTrue is true then the inside lines will execute
    return "Yes, it's true";
  }
  return"No, it's false";  otherwise this line will be executed.
}
*/

// Strict Equality
/*
===
3 === 3
double equality sign converts both the operands into the same type and then compares.
triple equality sign doesn't do type conversion

3 === 3 --> true
3 === '3' --> false
both would be true if we used a double equal sign.
*/

// Ineuquality operator
/*
  != 
  does type conversion
*/

//Strict Inequality operator
/*
 !==   
 does not do type conversion
*/

/*
Greater than >
Greater than or Equal to >=
Less than <
Less than or Equal to <=
*/

//AND operator
/*
 to check if a value is greater than or equal to 25 and less than or equal to 50
 if(val <= 50){
  if (val >= 25){
    return true;
  }
 }

 easier way:
 if(val <=50 && val>=25){
  return "Yes";
 }
*/

//OR operator
/*
function testLogicalOr(val){

  if(val < 10){
    return "Outside";  
  }

  if(val > 20)}{
    return "Outside";
  }
}

easier way:
function testLogicalOr(val){
if(val < 10 || val >20){
  return "Outside";
}
return "Inside";
}
}
*/

//Else statements
/* 
function testElse(val){
  var result = " ";

  if(val > 5){
    result = "Bigger than 5";
  }
  else{
    result = "5 or Smaller";
  }
  return result;
}
*/
//Else-if Statements
//NOTE: In if-else ladder, once the first conditon is met it doesnt check for other conditions, so the order in which we type the if-else statements is very important.

// Golf Code
/*
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, strokes){
         if(strokes == 1){
          return names[0];
         }
         else if(strokes<=par-2){
         return names[1];
         }
         else if(strokes<=par-1){
         return names[2];
         }
         else if(strokes<=par){
         return names[3];
         }
         else if(strokes<=par+1){
         return names[4];
         }
         else if(strokes<=par+2){
         return names[5];
         }
         else if(strokes<=par+3){
         return names[6];
         }
}

console.log(golfScore(5,4));
*/

//Switch Statements
/*
function caseInSwitch(val){
  var answer = "";
  switch(val){
    case 1:
      answer = "alpha"
      break;  NOTE: if we dont use break it will check all the statements.
  
    case 2:
     answer = "beta";
     break;'
    case 3:
     answer = "gamma";
     break;
    case 4:
     answer = "delta";
     break;
    default:       //the default statemetn runs when any of the case numbers are not entered.
      answer = "Stuff";  
}
return answer;
}

Multiple cases with same return value:

function sequentialSizes(val){

  var answer = "";
  switch(val){
    case 1:
    case2:
    case3:
      answer = "Low";   // for case 1 2 3 it will pass through all the cases and return the answer low and then break out.
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
}
*/

//Returning Boolean Values from Functions
/*
Trick when we want a function to return a boolean value

function isLess(a,b){
  if(a < b){
    return true;
  }
  else{
    return false;
  }
}

instead of the if else statements we can directly return a < v

function isLess(a,b){
  return a<b;
}
*/

// Return Early Patter for Functions
/*
function abTest(a, b){
  if (a < 0 || b < 0){
    return undefined;   // returning early from the function wihtout further processing
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
*/


// Couting Cards function
/*
var  count = 0;

function cc(card){
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      cout--;
      break;
  }
  hvar holdbet = "Hold"
  if(count > 0){
    holdbet = 'Bet'
  }
  return count + " " + holdbet;
}

cc(2);
cc("K");
cc(10);
cc('K');
cc('A');
console.log(cc(4));
*/

//Objects
/* 
var ourDog = {        // we can store a collection of variables inside an object and those variables can be arrays numbers strings or anything else in javascript.
  "name": "Camper",
  "legs": 4,               
  "tails": 1,
  "friends": ["everything!"]
};
*/

//Dot Notation
/* 
var testObj = {
  "hat": "balcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;  // sets the value of hatValue = ballcap
var shirtValue = testObj.shirt;  // sets the value of shirtValue = jersey
*/

//Bracket Notation:
/*
 var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
 };

 var entreeValue = testObj["an entree"];
 var drinkValue = testObj['the drink'];  even using '' eill work even though its written in "" in the object
*/

// Accessing Object Properties with Variables
/* 
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
*/

//Updating Object Properties
/* 
var ourDog = {       
  "name": "Camper",
  "legs": 4,               
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";  // changes the name property of ourDog to Happy Camper.
*/

// Add new properties to Object
/* 
var ourDog = {       
  "name": "Camper",
  "legs": 4,               
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";  // new property added.
ourDog['bark'] = "woof"   // new property added using bracket notation.
*/

//Delete properties form Objects
/* 
var ourDog = {       
  "name": "Camper",
  "legs": 4,               
  "tails": 1,
  "friends": ["everything!"],
  'bark': "bow-wow"
};

delete ourDog.bark   // use the delete keyword.

*/

// Using objects for Lookups 
/*
Instead of switch case statements we can use objects

example:
switch(val) {
  case "alpha"
  result = "Adams";
  break;
  case "bravo"
  result = "Boston;
  break;
  case "charlie"
  result = "Chicago";
  break;

  instead of this

  var lookup = {
    "alpha" = "Adams",
    "bravo" = "Boston",
    "charlie" = "Chicago"
  }

  result = loopkup[val];
  return result;
}

// checking if objects have a specific property
/*
var myObj = {
    gift: "piny",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp){
  if(myObj.hasOwnProperty(checkProp)){   // hasOwnProperty)() checks if the object has that property.
  return myObj[checkProp];
}
else{
  return "Not Found"
}
}
*/

//Complex Objects
/* 
var myMusic = [    // this is an array with two objects inside
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP"],
    "gold": true
  },
  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": ["Youtube video"]
  }
]
*/

// Accessing Nested Objects
/*
var myStorage = {  // this is an object which has objects inside it
  "car": {   //this property inside is an object
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

//acessing glove box property
var gloveBoxContents = myStorage.car.inside["glove box"] 
// NOTE: For inside we cannot use dot notation to access "glove box" since it has a space, so bracket notation must be used.
comsole.log(gloveBoxContents);
*/

//Accessing Nested Arrays
/*
we need to use bracket notation and dot notaiton together inorder to access arrays inside objects etc..

var myPlants = [   // this is an array of objects
  {
    type: "flowers",
    list:["rose", "tulip", "dandelion"]
  },
  {
    type:"trees",
    list: ["fir", "pine", "birch"] 
  }
];

var secondTree = myPLants[1].list[1]  // this will store "pine" into the variable secondTree
*/

//Record Collection
/*
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": ["Let it Rock", "You GIve Love a Bad Name"]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": ["1999", "little Red Corvette"]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
//Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
  if (value === ""){
    delete collection[id][prop];
  }
  else if(prop === "tracks"){
    collection[id][prop] = collection[id][prop] || [];    // this means that if the collection has a track property then set it to itself otherwise set the track property to an empty array. this way we can ensure that we have a track property before adding a track to it.
  collection[id][prop].push(value);
  }
  else{
     colloection[id][prop] = value;
  }
  return collection;
}

console.log(updateRecords(2468, "tracks", "test"));
*/

//Loops
/*
var i = 0;
var ourArray = [];
while(i<5){
  ourArray.push(i);
}

for(var i = 0; i < 5; i++){
  ourArray.push(i);
}

//counting backwards with for loops:

var ourArray = [];

for(var i = 10; i > 0; i-= 2){
  ourArray.push(i);
}

console.log(ourArray);

//Iterate through arrays with for loops:

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i = 0; i < ourArr.length; 1++){
  ourTotal += ourArr[i];
}

console.log(ourTotal);
*/
// Nested For Loops
/*
function multiplyAll(arr){
  var product = 1;
  for (var i =0; i< arr.length; i++){
    for(var j=0; j < arr[i].length; j++){
      product *= arr[i][j]    //arr[i] refers to the arrays inside the larger outer array and j refers to the elements inside the i+1 th element inside the outer array.
    }
  }
  return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);  // this is a multi-dimensional array (array of arrays)
console.log(product);
*/

//Iterate with Do While Loops
/*
var myArray = [];
var i = 10;

  do{
  myArray.push(i);
  i++;
}while(i < 5)

console.log(i, myArray);   
NOTE:
The difference in while and do while loops is that while loop first check the conditions and then looks the code inside the loop
whereas the do while loop first does the code inside the do brackets and then checks the while condition.
*/

//Profile Lookup
/*
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "8574884743",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "6802849839",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "SherLock",
    "lastName": "Holmesr",
    "number": "6802849839",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  for(var i = 0; i < contacts.length; i++){
    if(contacts[i].firstName == name){
      return contacts[i][prop] || "No such property";
  }
}return "No such contact";
}

*/


//Generate Random Fractions
/*
function randomFunction(){
return Math.random();
}
console.log(randFunction);

//Generate Random Whole Numbers
/*
Math.floor()  return the nearest whole number to the value passed in it.
var randomNumberBetween0and19 = Math.flor(MAth.random()*20);

function randomWholeNum(){
return Math.floor( Math.random());
}
console.log(randomWholeNum);
*/

// Genrerate Random Whole Numbers within a range
/*
function ourRandomRange(ourMin, ourMax){

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1,9));
*/

// parseInt Function
/*
parseInt converts string to integer. If it cannot convert the string to integer it will output NaN
function converToInteger(str){   
  return parseInt(str);
}

convertToInteger("56");

Using the parseInt with Radix
Radix is the base of a number
we use the base 10 in everyday life
base 2 is binary etc.
function converToInteger(str){   
  return parseInt(str, 2);  // now the parseInt function knows that the number will be of base 2
}
convertToInteger("10011");
*/

//Ternary Operator
/*
condition ? statement-if-true : statement -if-false;

function checkEqual(a, b){
  return a === b ? true : false;
  but it's easy to write return a===b because it return true or false automatically
}

Multiple Tenary Operators
function checkSign(num){
  return num > 0 ? 'positive' : num < 0 ? "negative" : "zero"
}
console.log(checkSign(0));
*/

//DIfferences in var and let
/*
we can declare a var variable two times 
but we cannot declare a let variable two times, however we can reassign it some value

var catName = "Quincy"
var catName = "Beau"     -> accepted

let catName = "Quincy"
let catName = "Beau"    -> error

let catName = "Quincy"
catName = "Beau"        -> accepted

NOTE: if we type "use strict"
inside any function or in the beginning of the javascript code it will use strict mode and catch coding mistakes.

Compare Scopes of var and let variables
var can be global or local
let can only be local

Example:
function checkScope(){
  "use strict";

  var i = "function scope";
  if(true){
    i = "block scope";
    console.log("Block Scope i is: ", i);
  }
  console.log("Function Scope i is: ", i);
  return i;
}

checkScope();
OUTPUT:
Both function scope and block scope will be "block scope" since it is reassigned this value and it will change globally also.

But if type:
function checkScope(){
  "use strict";

  let i = "function scope";
  if(true){
   let i = "block scope";
    console.log("Block Scope i is: ", i);
  }
  console.log("Function Scope i is: ", i);
  return i;
}
OUTPUT:
Function Scope will be "function scope"
Block Scope will be "block scope"
the value of the i variable will be changed ony inside the if block.

Example:
function checkScope(){
  "use strict";

  if(true){
   let i = "block scope";
    console.log("Block Scope i is: ", i);
  }
  console.log("Function Scope i is: ", i);
  return i;
}
here we will get an error since let i is declared inside if block and cannot be accessed outside it

function checkScope(){
  "use strict";

  if(true){
   var i = "block scope";
    console.log("Block Scope i is: ", i);
  }
  console.log("Function Scope i is: ", i);
  return i;
}
here even though var i is declared inside the if block we still wont get any error for using it outside
it will simply print the value assigned inside the if block.
*/

//Read-Only Variables
/*
 const variables 
 have same properties of let with the addtional property that it cannot be reassigned. It's read-only.
*/

//Mutate an Array Declared with const
/*
const s = [5, 7, 2];
function editInPlace(){
  "use strict";

  // s = [2, 5, 7] this will not work
 
     s[0] = 2;
     s[1] = 5;
     s[2] = 7;    // this will work
}

editInPlace();
console.log(s);  // we will get the updated array.
*/

// NOTE IT'S A COMMON PRACTICE TO WRITE CONST VARIBALES IN CAPITALS

//Preventing Object Mutation
/*
const MATH_CONSTANTS = {
  PI: 3.14
};
Object.freeze(MATH_CONSTANTS);  --> this function will freeze the object MATH_CONSTANTS and it cannot be mutated or updated. 
*/

//Arrow function
/*
var magic = function() {
  return new Date();
}

this function is called anonymous function since it doesnt have a name but it is assigned to some variable
the shortcut to write this is:

var magic = () => new Date();
const magic = () => new Date();  //change to const because it's a good practice
example with arguments:
var myConcat = function(arr1, arr2){
  return arr1.concat(arr2);
}

same as
const myConcat = (arr1, arr2) => arr1.concat.(arr2);
console.log(myConcat([1,2], [3, 4, 5]));

//Higher Order Arrow Function
when one function takes other functions as paramenters we should use arrow operator
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x );
                                  // here num is the only arg so no need to pur it in () paranthesis
return squaredIntegers;
};

const squaredIntegers = squaredList(realNumberArray);
console.log(squaredIntegers);
*/

// Default Parameters:
/*
const increment = (function(){
  return function increment(number, value =1){ // here the value = 1 says that the default value of the parameter 'value' is 1 if no value is entered to this parameter the function will use this default value.
    return number + value;
  }
})();

console.log(increment(5,2)); // output is 7
console.log(increment(5));  // output is 6 since here ituses the default increment value which is 1.
*/

// Rest Operator
/*
...  --> rest operator
with this we can take variable number of arguments

Example:
const sum = (function(){
  return function sum(x,y,z){
    const args = [x, y, z]; // this line is making all the entries into one array
    instead we can write for line 1079
    return function sum(...args) and skip line 1080 this will make everything passed into one array and that will be called args
    return args.reduce((a, b) => a+b, 0);
  };
})();
console.log(sum(1,2,3));
*/

//Spread Operator
/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function(){
  arr2 = arr1;  // this is not copying arr1 since any change in arr1 will also change arr2
  arr1[0] = 'potato'  // this will change arr1 1st element and also arr2 first element
  if we use spread operator instead,
  arr2 = [...arr1]; // this way  
})();
console.log(arr2); 
*/
// Destructuring Assignment
/*

*/






