// function getData(){
//   return new Promise((resolve,reject) => {
//     resolve("promise Resolve ho gya");
//   },3000); 
// }

// // console.log(getData)

// async function handlepromise(){
//   console.log("hello");
//   const val = await getData(); //always retuns a promise
//   console.log(val);
//   console.log("world");

//   const val2 = await getData(); //always retuns a promise
//   console.log(val2);
//   console.log("world 2 ");

// }
// handlepromise();





// const getdata = new Promise((resolve,reject) => {
//   setTimeout(() => {

//     resolve("promise Resolve ho gya");
//   },3000); 
// });


// const getdata2 = new Promise((resolve,reject) => {
//   setTimeout(() => {

//     resolve("promise Resolve ho gya");
//   },3000); 
// });

// async function handlepromise(){
//   console.log("hello");
//   const val = await getdata; //always retuns a promise
//   console.log(val);
//   console.log("world");

//   const val2 = await getdata; //always retuns a promise
//   console.log(val2);
//   console.log("world 2 ");

// }
// handlepromise();


// function orderPlaced() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("order placed");
//       resolve();
//     }, 2000);
//   });
// }

// function foodPrepared() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("food prepared");
//       resolve();
//     }, 2000);
//   });
// }

// function foodDelivered() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("food delivered");
//       resolve();
//     }, 1000);
//   });
// }

// async function processOrder() {
//   await orderPlaced();
//   await foodPrepared();
//   await foodDelivered();

//   console.log("enjoy your food");
// }

// processOrder();


function maggielana(cb){
  console.log("maggie lene gye...");
  setTimeout(() =>{
    console.log("magie aaa.. gya");
    cb(maggiekhana);  // maggie khana bheje as a function
  },2000); // representing it take  2 sec to get maggie fromm shop
}

function maggiebanana(cb){
  console.log("maggie banana start");
  setTimeout(() => {
    console.log("maggie ban gya..");
    cb();
  },2000)
}


function maggiekhana(){
  console.log("maggie khana start");
  setTimeout(() => {
    console.log("maggie khana khatam");
  },2000);
}
maggielana(maggiebanana);