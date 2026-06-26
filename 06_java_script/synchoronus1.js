// let count = 0;
// const intervalid = setInterval(() =>{
//   count++;
//   console.log("interval: ",count);
//   if(count==3){
//     clearInterval(intervalid);
//   }
// },1000);

// setTimeout(()=>{
//   console.log("Timeout");
// },2500);

// for(var i= 1;i<4;i++){
//   setTimeout(()=>{
//     console.log(i);
//   },i*1000);
// }

let count = 3;
const countdown = setInterval(() =>{
  if(count>0){
    console.log(count);
    count--;
  }
  else{
    console.log("Ended");
    //clearInterval(countdown);
  }
},1000);