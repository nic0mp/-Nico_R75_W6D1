// Basics of JavaScript
/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/

// String Variable
var first_name = 'Will'

//Display our value to the JS Console
console.log(first_name)

//Integer Variable
var some_number = 32; //Semicolons are 'Syntactic sugar' unnecessary but preferred

console.log(some_number)

//Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable
var some_array = [1,2,3,4];

console.log(some_array)

// Object Variable
var some_object = { 'test': 'Please test me!'}

console.log(some_object)

//JAVASCRIPT HOISTING EX
console.log(some_random_variable)
var some_random_variable = 'This is a random string';
console.log(some_random_variable)

// Better way of Declaring Variables is by using "let" or 'const'
// console.log(some_random)
let some_random = 384
console.log(some_random)

const super_hero = 'The Hulk'
console.log(super_hero)

// let key word variables be rassigned more easily than const var

some_random = first_name + ' Smith'
console.log(some_random)

// super_hero = 'Ironman'
// console.log(super_hero)

/** 
 * === Basic math opertaion in JS ===
 * */ 
// Addition
let sum = 5+5
console.log(sum)

// Subtraction
let diff = 5 - 5; // let diff -= 5
console.log(diff)

// Multiplication
let product = 5 * 5; // let product *= 5
console.log(product)

// Division
let divide = 5 / 5; // let divide /= 5
console.log(divide)

// Exponetial
let square = 5 ** 2; // let square **= 2
console.log(square)

//More math
let find_floor =Math.floor(35.7)
console.log(find_floor)

//Find Ceiling
let findCeiling = Math.ceil(35.7)
console.log(findCeiling)

//MIND BENDER
let crazyStuff = some_float + '4'
console.log(crazyStuff)

//MIND BENDER 2
let crazyStuff2 = some_float + parseFloat('4') //parseFloat turns numbers to string
console.log(crazyStuff2)

// Using the let keyword and change the variable
let nba_goat = 'MJ'
console.log(nba_goat)

nba_goat = 'AI'
console.log(nba_goat)

/*
    BAD REDECLARATION:
    let nba_goat = 'LeBron';
    console.log(nba_goat)
*/

/**
  ========JAVASCRIPT FUNCTIONS==========
 */

  // regular Named Function
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}
// calling a function
console.log(addNums())

// Variable Named Function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

// Call our function
console.log(addNums2(4,5))

function addNums3(x,y){
    return x + y
}

console.log(addNums3(4,8))

//E6+ ARROW FUNCTION WITH SINGLE PARAMETER
/**
  Using a single parameter in an arrow funtion WITHOUT parens 
  can only be done with ONE parameter NOT if 2 or more are introduced.
 */

let cubed = (num) => {
    return num **3
}

let cubed2 = num => {
    return num ** 3
}

console.log(cubed(4))
console.log(cubed2(5))

// Javascript Closure
// Self-Invoking Funct

console.log(function(name){
    let hello = 'Hello World ' +name
    return hello
}('Nico'))

let quotientA = function(num,num2){
    return num / num2
}
console.log(quotientA(12,3))

let sumA = (num) => {
    return num + 3
}
let sumB = (num) => {
    return num + 3
}
console.log(sumA(4))
console.log(sumB(7))

// Javascript Contrrol Flow

function determineAge(age){
    if ( age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult Not retired yet.'
    } else {
        return 'Elderly - Retired'
    }
}

console.log(determineAge(33))

// JS ternary operator

function determineAge2(age){
    return (age<18) ? 'Minor': (age >=18 && age <=65)?
    'Adult Not reitre Yet': 'Elderly Person Retired'
}

console.log(determineAge2(77))

// LOOPS IN JS -- FOR LOOP
// FOR LOOP SYNTAX------ for keyword(counter;condition:increment/decrementation)

function countByOne(){
    //for loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

function decByOne(){
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing has stopped'
}
console.log(decByOne())

// While Loop - JavaScript
function count_With_While(){
    let i = 0 // Counter
    let text = '';

    // While Loop
    while(i < 10){
        text += `This number is...${i} \n`
        i++
    }
    return text
}

console.log(count_With_While() )
  
// Do While loop

function count_with_do_while(){
    let i = 0; // Counter
    let text = '';

    //Do
    do {
        text += `This number is above...${i} \n`
        i++
    } while(i < 10)
    
    return text
}

console.log(count_with_do_while())

/*
    Looping with Arrays and Arrary Methods, Array String Methods
*/
//  Create an array: groupOfNames

let groupOfNames = ['Brock','Misty','Ash','Gary','Alphonso']
// Index for the first position 
console.log(groupOfNames[0]) //Brock

// Deconstruction of an array
let brock, misty, ash, others;
[brock, misty, ash, ...others] = groupOfNames

// brock = groupOfNames[0]
// misty = groupOfNames[1]
// ash = groupOfNames[2]

console.log(ash)
console.log(others)

// method 1 for looping through an array
// i starts at index 0, it goes up to the length of list(4)
function showAllNames(namesList){
    for(let i =0; i < namesList.length; i++){ 
        console.log(namesList[i])
       
    }
    return 'Done with list'
}
console.log(showAllNames(groupOfNames))

//Method 2 for looping
groupOfNames.forEach(element => console.log(element))

// JS array mehtods
// Array.toString()
console.log(groupOfNames.toString())
console.log(typeof(groupOfNames.toString()))

/* JAVASCRIPT ARRAY METHODS: .map(), .filter(), .reduce() */

// .map()
let b_names = groupOfNames.map( i => {
    if (i[0] == 'A'){
        return i
    } else {
        return false
    }
})

console.log(b_names)

// .reduce

const nums = [2,4,6,8,10] 
let numsReduced = nums.reduce((accumulator, currentNum) => {
    return accumulator + currentNum
})

console.log(numsReduced)

// .filter
let longNames = groupOfNames.filter(name => name.length > 3)
console.log(longNames)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(groupOfNames.join('; '))

console.log(groupOfNames.slice(0,3))

// .splice()
let capturedVal = groupOfNames.splice(0,1,'Oak')

console.log(`This was removed: ${capturedVal}`) 
console.log(groupOfNames)

function replaceEvenNames(replacement){
    for(let i=0; i < groupOfNames.length; i++){
        (i % 2 == 0)? groupOfNames.splice(i,1,replacement) : groupOfNames[i]
    }
    return groupOfNames
}

console.log(replaceEvenNames('Goku'))

// Using .search and .slice on array values that are strings
console.log(groupOfNames[0].search('u')) // index == 0 
console.log(groupOfNames[1].slice(0,groupOfNames[1].length-2))