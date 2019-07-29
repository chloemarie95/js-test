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

1:41:13