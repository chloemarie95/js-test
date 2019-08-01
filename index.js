// Practice js 

/* Data types:
undefined, null, boolean, string, symbol, number, and object
*/

/* Symbol = immutable, unqiue value
Object = store key value pairs */

// Variable = store and manipulate data 
/* Three ways to declare a variable: 
    - var = used throughout whole programme
    - let = only in the scope of where you declare the variable
    - const = a variable that can never change, this will cause an error
*/ 

// End all lines of code with ;

// Declaring and assigning data to variables:

var a; //declaring
var b = 2; //delcaring + assigning/initialising 

// Use console.log(variable) to check what variables are up to within different parts of your programme

/* Naming convention: camelCasing
    - e.g. newVarTest
*/

// Incrementing

var myVar = 87;

myVar = myVar + 1;

// SHORTHAND

myVar++;

// Decrementing

myVar--;

// Remainder (Modulus: %) used to detemrine if a number is even (0) or odd (1)

// SHORTHAND

b = b + 10;

b += 10;


/****** ARRAYS ******/

// Store multiple data types in a single array, typically used for lists

var arr = ["normal array", 42];
var arr2 = [["nested array"], [23, {hello: "world"}]];

// Use array indexes to modify arrays

// Use multi-indexes to access nested arrays

var myData = arr2[1][0]; //second array, first element >> 23

// .push() >> add to last element
// .pop() >> remove last element
// .shift() >> remove first element
// .unshift() >> add to start 

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2]];


/****** FUNCTIONS ******/

// Create re-usable code 

function ourReusableFunction() {
    console.log("Hello, world");
}

ourReusableFunction();

// Pass in arguments for parameters to use inside the function 

function functionWithArgs(a, b) { // initilise arguments 
    console.log(a - b);
}

functionWithArgs(10, 5); // = 5

// Scope refers to the visability of variables 

/* Global - declared outside of functions, applied to entire code 

If use var inside a function, it's scoped to that function. 

If you don't use var with a variable INSIDE a function, it will become global */ 

// Having local and global variables with the same name, local will be used when calling function
// But global used when calling global variable outside of function

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); // = 3

// Passing info to functions

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Queues - ordered items where things can be added at the back, and items at the front are removed

// JSON.stringify = used to change arrays into strings that can be printed in console

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log(nextInLine(testArr, 6));
console.log('queued array: ' + JSON.stringify(testArr));


/***** CONDITIONAL STATEMENTS *****/

// If statements used to make decisions in code 
// Equality used with if statements 

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "not Equal";
}

console.log(testEqual(10)); //Not equal as 10 != 12

/* Strict equality means same data and type 
e.g. 3 === '3' would be false */ 

/* NOT equal: != 
STRICT NOT equal: !==
Greater than: >
Less than: < 
Greater or equal: >=
Less or equal: <= 
And: && 
Or: ||  */

function testElseIf(val) {
    if (val > 5) {
        return "Greater than 5";
    }
    else if (val < 10) {
        return "Smaller than 10";
    }
    else {
        return "Between 5 and 10";
    }
}

/* Order of statements are important, start low then high
As it will print when first condition is met and ignore the rest  */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }
    else if  (strokes <= par - 2){
        return names[1]
    }
    else if  (strokes <= par - 1){
        return names[2]
    }
    else if  (strokes <= par){
        return names[3]
    }
    else if  (strokes <= par + 1){
        return names[4]
    }
    else if  (strokes <= par + 2){
        return names[5]
    }
    else if  (strokes <= par + 3){
        return names[6]
    }
}

console.log(golfScore(5, 4));

/* Switch can test values and sets answer to the following conditions
Uses strict equality operator
Similar to else if */

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break; // end of case statement
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break;
        case 4: 
            answer = "delta"
            break;
        default: //like else 
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(caseInSwitch(3)); // = gamma 
// if 'hello' was argument, it will return empty string, as it doesn't match case


// if want to group options into one, omit break e.g. 1, 2, 3 group into 'low':

function sequentialEqualSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
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
    return answer;
}

console.log(sequentialEqualSizes(8)); // High

// Comparison operators return booleans by default

function isLess(a, b) {
    return a < b; // Instead of using if a < b is true
}


// Returning early in a function, to leave a function

function abTest(a, b) {
    if (a < 0 || b < 0){
        return undefined;
    }
    return // Add logic here
}

console.log(abTest(2, 2));


// Card counting - black jack game function

/* Rules: 
    If low, count higher
    If high, count lower
    If even, 
*/

var count = 0;

function cardCount(card) {
    switch(card) {
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
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cardCount(2); cardCount(3); cardCount(7); cardCount('K'); cardCount('A');
console.log(cardCount(4));


/********* OBJECTS **********/

/* Similar to arrays
    Arrays use indexes to access data
    Objects use properties 
*/ 

var ourDog = {
    "name": "Quincy",
    "legs": 4,
    "tail or tails": 1, // Use braket notation when props have spaces
    "friends": ["sally", "daniel"]
}

// Accessing object properties two ways: Dot Notation

var howManyLegs = ourDog.legs; 

// Or Bracket Notation (for spaced prop names)

var howManyTails = ourDog["tail or tails"];

// Bracket notation can be used to access properties using variables 

var howManyFriends = "friends";
var dogFriends = ourDog[howManyFriends]; // ["sally", "daniel"]

// Dot notation used to update properties

ourDog.name = "ToTo"; //Replace Quincy with ToTo

//Add new properties to an object: Dot or Bracket methods

ourDog.bark = "bow-wow";
ourDog['bark'] = "bow-wow";

// Delete properties from object

delete ourDog.bark;

// Testing objects for properties 

function checkObj(checkProp) {
   if (ourDog.hasOwnProperty(checkProp)) { //has prop returns boolean
        return ourDog[checkProp];
   } else {
       return "Not Found"
   }
}

console.log(checkObj("legs")); // 4


// Manipulating complex objects

// Similar layout to JSON

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, //Add comma as it's inside array, each element has comma
    {
        "artist": "Fleetwood Mac",
        "title": "Tango in the Night",
        "release_year": 1983,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
    }
]

// Nested objects

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box'];

console.log(gloveBoxContents); // Maps

// Nested arrays 

// Use index position, then property names

// e.g. nestedArray[1].list[1];
// In nestedArray, go to second array, in list property, second item


// Coding task

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); // Way of making copy of object before changes

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    }    //Testing to delete props if empty
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []; // Create a new prop if doesn't exist
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    } 
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


/******* LOOPS ********/

//Run codes multiple times

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

//Iterating loops with FOR loops

var ourArray = [];

for (var i = 0; i < 5; i++) { //First initilaise, then the condition (once it's false, the loop breaks out), then increment
    ourArray.push(i);
}

//Increment with evem numbers

for (var i = 0; i < 10; i += 2) { //start at 1 for odd numbers 
    ourArray.push(i);
}

//Count backwards

for (var i = 10; i > 10; i -= 2){
    ourArray.push(i);
}

//Iterate through contents of array with loop

var myArray = [ 2, 3, 4, 5, 6 ];
var total = 0;

for (var 1 = 0; i < myArr.length; i++) {
    total += myArr[i];
} //Adds the total of the numbers in the array


//Nested loops on nested array

function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++) { //Practice to call 1st variable i, then j for next k...etc
        for (var j = 0; j < arr[i].length; j++) //Each element inside nested arrays
            product *= arr[i][j];
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);


//DO WHILE loops

/* While loops checks condition before running, 
do while loops run the code one time, then checks to run again */

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);


/* CODING CHALLENGE */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
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
   for (var i = 0; i < contacts.length; i++) {
       if (contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
       }
   }
   return "No such contact";
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


//Create random decimals

function randomFraction() {
    return Math.random();
}

//Random whole numbers

Math.floor(Math.random() * 20); // Get a number 0 - 19

Math.floor(Math.random() * 10) // Number 0 - 9 


//2:30:47