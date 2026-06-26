// function greet(){
//   console.log("Hello");
//   return function(){
//     console.log("world");
//   }
// }
// let w = greet();
// w();
// greet()();

// const p = new Promise((res, rej) => {
//   let data = "data Received";
//   let success =false;
//   if(success){
//     red(data);
//   }else{
//     rej();
//   }
// });

// p.
// then((data) => {
//   console.log(data);
// })
// .catch(()=> {
//   console.log("data not received");
// });

function checkEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`number is even`);
    } else {
      reject(`number is odd`);
    }
  });
}

checkEven(8)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });