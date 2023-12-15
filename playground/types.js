// Strings

let firstName = 'Jane';
let middleName = 'Sarah';
let lastName = 'Doe';

// Concatonation: Joins 2 or more strings together
let fullName = firstName + ' ' + middleName + ' ' + lastName
console.log (fullName)


// Interpolation: Joins 2 or more strings together (it must use back ticks)
let fullName2 = `${firstName} ${middleName} ${lastName}`
console.log(fullName2)
let str = ` ${1 + 3} doing the sum ${lastName} !`
console.log(str)

// Numbers
let a = 2;
let b = 5;
let sum = a + b;
console.log(sum)

let str1 = 'hello world';
let sum1 = a + str1;
console.log(sum1)


let c = '5';
let sum2 = c + b;
console.log(sum2)

let sum3 = Number(c) + b;
console.log(sum3)

let diff = b - a;
console.log(diff);

let mult = a * b;
console.log(mult)

let div = b / a;
console.log(div)

let mult1 = b * c;
console.log(mult1)


let mult2 = b * str1;
console.log(mult2)

// Objects:Collection of information in a variable {}

let person = {
    firstName: 'Veroh', 
    lastName: 'Wangu',
    age: 25,
    dob: 1998
}
console.log(person)
console.log(person.lastName)
console.log(person.dob)


let personFullName = person.firstName + ' ' + person.lastName
console.log(personFullName)

let personSentence = person.firstName + ' ' + person.lastName  + ' is ' +  person.age + ' years old' 
console.log(personSentence)

let personFullName2 = `${person.firstName} ${person.lastName}`
console.log(personFullName2)

let personSentence2 = `${person.firstName} ${person.lastName} is ${person.age} years old`
console.log(personSentence2)

// Boolean:Has two variables, true or false
// The true or false values are not in quotes

let status = true
console.log(status)

console.log(typeof status)

let age = 32
let older = age < 25
console.log(older)
console.log(typeof older)

// Arrays:Items seperated by a comma []
// Index -> position of an item in an array 
// Length -> gives us numbers of items in an array

let numbers = [ 1, 20, 3, 41, 12, 11, 22, 13, 54, 68]
console.log(numbers[4])
console.log(numbers[10])
console.log(numbers[5])
console.log(numbers[9])
console.log(numbers.length)
console.log(numbers[numbers.length-1])

let shoppingList = ['sugar', 'salt', 'bread', 'butter', 'milk']
console.log(shoppingList)


let people = [{name:'Judy Doe'}, {name:'Veroh Wangu'}]
console.log(people)

// Arrow Functions









