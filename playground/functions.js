function getSum(){ 
    let a = 10
    let b = 22
    let sum = a + b
    return sum
}

console.log(getSum())

const getSum2 = () => {
    let a = 30
    let b = 22
    let sum = a + b
    return sum 
}
console.log(getSum2 ())

function getDiff(){
    let a = 20
    let b = 13
    let diff = a - b
    return diff  
}
console.log(getDiff())

const getDiff2 = () => {
    let a = 20
    let b = 13
    let diff = a - b
    return diff  
}
console.log(getDiff2 ())

// Parameters and Arguments

function getProduct (a, b){
    let product = a * b
    return product
}
console.log(getProduct(20, 30))

const getProduct2 = (a, b) => {
    let product = a * b
    return product
}
console.log(getProduct2(20, 30))

function getName(name){
    let greeting = 'hello ' + name
    console.log('name')
    return greeting
}
console.log(getName('Jane Doe'))

const getName2 = (name) => {
    let greeting = 'hello ' + name 
    return greeting
}
console.log(getName2('Jane Doe'))

function getFullName(firstName, lastName){
    let fullName = firstName + lastName
    return fullName
} 
console.log(getFullName('Bruce  ', 'willis'))

const getFullName2 = (firstName, lastName) =>{
    let fullName = firstName + lastName
    return fullName
} 
console.log(getFullName2('Bruce  ', 'willis'))


function getTotal(price){
    let total = (price * 116)/100
    return total
}
console.log(getTotal(1000))

const getTotal2 = (price) =>{
    let total = (price * 116)/100
    return total
}
console.log(getTotal2(1000))

function getAverage(a,b,c,d,e,f){
    let average = (a + b + c + d + e + f)/6
    return average
}
console.log(getAverage(12,32,45,56,72,84))

const getAverage2 = (a,b,c,d,e,f) =>{
    let average = (a + b + c + d + e + f)/6
    return average
}
console.log(getAverage2(12,32,45,56,72,84))

function getName3(names){
    let greeting = `hello ${names} Nice to meet you !`
    return greeting
}
console.log(getName3('Gogo Daffie'))

const getName4 = (names) =>{
    let greeting = `hello ${names} Nice to meet you !`
    return greeting
}
console.log(getName4('Gogo Daffie'))

const getProd = (a, b) => a * b
console.log(getProd(16, 24))

let age = 60
if (age === 70){
    console.log('you are in your seventies')
} else if (age === 60){
    console.log('you are in your sixties')
} else if (age === 50){
    console.log('you are in yor fifties')
} else if (age === 40){
    console.log('you are in your forties')
} else if (age === 30){
    console.log('you are in your thirties')
} else if(age === 20){
    console.log('you are in your twenties')
} else if(age === 10){
    console.log('you are in your tens')
} else{
    console.log('unknown')
}

let age2 = 40
if (age2 => 40){
    console.log('you are older')
}
 else if (age2 < 40){
    console.log('you are  younger')
 }

let time = '10:00PM'
 if (time === '8:00AM'){
    console.log('Good morning')
 } else if (time === '12:00PM'){
    console.log('Good afternoon')
 } else if (time === '6:00PM'){
    console.log('Good evening')
 } else {
    console.log('unknown')
 }

let marks = 55
if(marks >= 80){
    console.log('A')
} else if(marks >= 70 && marks <= 79){
    console.log('B')
} else if(marks >= 60 && marks <= 69){
    console.log('C')
} else if(marks >= 50 && marks <= 59){
    console.log('D')
} else {
    console.log('E')
}

