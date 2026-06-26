let arr=[1,2,3,true,"apple"];
console.log(arr);


arr.push("mango");//push /add elememt att  the end
console.log(arr);

arr.pop();  // pop/remove elemennt from end
console.log(arr);

arr.unshift("orange"); // add element aat start
console.log(arr);
let x= arr.shift(); // remove element from start
console.log(arr);


console.log(x);




// for loop


for(let a=0;a<arr.length;a++){
  console.log(arr[a]);
}

// for of loop

for(let a of arr){
  console.log(a);
}