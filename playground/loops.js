// For each

let numbers = [20, 30, 16, 15, 23]
numbers.forEach((number) => {
    console.log(number * 10)
})

const names = ['Jane', 'John', 'Julie', 'Janet','James']
names.forEach((name) => {
    console.log(name + ' Doe')
})


// Maps

numbers.map((number) => {
    console.log(number)
})

let newNumbers = numbers.map((number) => {
    return number * 10
})
console.log(newNumbers)

names.map((name) => {
    console.log(name = 'Doe')
}) 

let newNames = names.map((name) => {
    return name + ' Doe'
})
console.log(newNames)

let newNumbers2 = numbers.map((number) => {
    if (number > 20) {
        return number * 10 
    } else {
        return number
    }
})
console.log(newNumbers2)

let newNames2 = names.map((name) => {
    if (name === 'Julie') {
        return name + ' Nyaga'
    } else {
        return name + ' doe'
    }
})
console.log(newNames2)

let todos = [
    {id:1, item: 'go to market', status:'complete'},
    {id:2, item: 'clean garage', status:'incomplete'},
    {id:3, item: 'wash dishez', status:'incomplete'}
]
let newTodos = todos.map((todo) => {
    if (todo.id === 3){
        return 'complete'
    } else {
        return 'incomplete'
    }
})
console.log(newTodos)


let newTodos3 = todos.map((todo) => {
    if(todo.id === 3) {
        return {...todo, status:'complete'}
    } else {
        return todo
    }
})
console.log(newTodos3)

let newTodos4 = todos.map((todo) => {
    if(todo.id === 3) {
        return {...todo, item:'wash dishes'}
    } else {
        return todo
    }
})
console.log(newTodos4)


    // using map, change the status of the item with an id of 3 from 'incomplete' to 'complete'




// Filter

let filteredNumbers = numbers.filter((number) => {
    return number > 20
})
console.log(filteredNumbers)


let filteredNumbers2 = numbers.filter((number) => {
    // console.log(number / 2)
    return number % 2 === 0
})
console.log(filteredNumbers2)

 let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0
 })
 console.log(evenNumbers)

 let oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0
 })
 console.log(oddNumbers)

 let arr = [10, 23, 12]
 let arr2 = [...arr, 20, 15]
 console.log(arr2)

 let person = {
    firstName: 'Jane',
    lastName: 'Doe'
 }

 let personDetails = {
    ...person,
    age: 20
 }
 console.log(personDetails)

//  Reduce
let people = ['Jane', 'John', 'Juliet', 'Jasper'];
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

  // using a 'for' loop

let nums = [50, 20, 30]
let sum = 0
for (let i = 0; i < nums.length; i++) {
  sum += nums[i]
}
console.log(sum)

  //  using forEach 

let nums2 = [50, 20, 30]
let sum2 = 0
nums2.forEach(function (num) {
  sum2 += num
})
console.log(sum2)

  // using a 'for' loop

let students = [
    { name: 'Jane Doe', marks: 80 },
    { name: 'Eric Doe', marks: 84 },
    { name: 'John Doe', marks: 79 }
  ]
let totalMarks = 0
for (let i = 0; i < students.length; i++) {
    totalMarks += students[i].marks
}
console.log(totalMarks)

    //  using forEach 
  
let students2 = [
    { name: 'Jane Doe', marks: 80 },
    { name: 'Eric Doe', marks: 84 },
    { name: 'John Doe', marks: 79 }
  ]

let totalMarks2 = 0
students2.forEach(function (student) {
  totalMarks2 += student.marks;
})
console.log(totalMarks2)

let students3 = [
    { name: 'Jane Doe', marks: 80 },
    { name: 'Eric Doe', marks: 84 },
    { name: 'John Doe', marks: 79 }
  ]
  const totalmarks = students3.reduce((a,b) => a + b.marks, 0)
  console.log(totalmarks) 
  
  
//   The error in the code is that forEach is not a function of the object person because person is not an array.


let person2 = { firstName: 'Juliet', lastName: 'Nyaga', age: 30 }

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)


let nums3 = [10, 11, 12, 21, 11, 13]
const total = nums.reduce((a, b) => a + b)
console.log(total)


let marks = [70, 80, 20, 30, 52];

const sum3 = marks.reduce((a, b) => a + b, 0);
const average = sum3 / marks.length
console.log(average)

let children = [{name:'Jack', age:4}, 
                {name:'Julie', age:2}, 
                {name:'Jackie', age:6},
                {name:'Johny', age:3}
]
const totalage = children.reduce((a, b) => a + b.age, 0)
console.log(totalage)

// Find

let names2 = ['Jane', 'John', 'Julie']
let name = names2.find((name) => name === 'John')
console.log(name)

let child = children.find((child) => child.age===2)
console.log(child)


let child2 = children.find((child) => child.age===6)
console.log(child2)


// For Loop

for (let i = 0; i < 4; i++) {
    console.log('hello world')
} 

// 
for (let i = 10; i > 0; i--) {
    console.log('hello world')
}

for (let i = 0; i< children.length; i++) {
    console.log(children[i])
}

for (let i = 0; i< children.length; i++) {
    console.log(children[i].name)
    console.log(children[i].age)
}

// React






