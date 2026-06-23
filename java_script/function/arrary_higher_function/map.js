let number = [1,2,3,4,5,];

let double = number.map((num) => num*2);
console.log(double);

let even = number.filter((num) => num%2==0);
console.log(even);


let price = [10,20,30,40];
let total = price.reduce((accumulator,currentItem ) =>accumulator+currentItem,0);

console.log(total)
