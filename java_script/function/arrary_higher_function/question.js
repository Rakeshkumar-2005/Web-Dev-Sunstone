// let words1 = ["apple","banana","orange"];
// let upper = words1.map((word) => word.toUpperCase());
// console.log(upper);




// let cart = [
//   {id:1, name:"laptop", price:100},
//   {id:1, name:"Mobile", price:200},
//   {id:1, name:"Computer", price:300},
// ];
// // let name = cart.map(item => item.name+"-"+item.price);
// let names= cart.map((item) =>({
//   name:item.name,
//   price:item.price

// }));
// console.log(names);

// let words2= ["apple","banana","cat","elephant","dog"];
// let result = words2.filter(word => word.length > 5);

// console.log(result);

// let people = [
//   {name:"A",age:16},
//   {name:"B",age:22},
//   {name:"C",age:17},
//   {name:"D",age:14},
// ];

// let ages = people.filter(person => person.age>18)
// console.log(ages)

// let words = ["apple","banana","cat","elephant","dog"];
// let total = words.reduce((total, word) => total + word.length, 0);
// console.log(total);

let number = [1,2,3,4,5,6,7,8,9,10]
let even = number.filter((num) => num%2==0).map(num=>num*num)
console.log(even);

let employee=[
  {id:1,name:"A",salary:20000},
  {id:2,name:"B",salary:30000},
  {id:3,name:"C",salary:40000},
  {id:4,name:"D",salary:50000},
  {id:5,name:"E",salary:60000},
];
// Employees with salary > 30000
let highSalary = employee.filter(emp => emp.salary > 30000);

console.log(highSalary);

// Average salary of all employees
let totalSalary = employee.reduce(
  (total, emp) => total + emp.salary,
  0
);

let averageSalary = totalSalary / employee.length;

console.log("Average Salary:", averageSalary);



let fruits = ["apple","mango","apple","orange","apple","mango"];
let result = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(result);