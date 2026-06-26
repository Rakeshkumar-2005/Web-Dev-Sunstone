function wait(){
  // let time  = new date().getTime();
  // while(new date().getTime()<time + 5000) {}
//   setTimeout(()=>{
//     console.log("5 second have passed");
//   },0);
      var id = setInterval(() =>{
        console.log("2 sec passed");
      },2000);


    setTimeout(()=>{
    clearInterval(id);
    console.log("code stopped");
    },5000);

}

console.log("hello");
wait();
console.log("world");

// console.log("random tasks");
// for(let i=0;i<10;i++){
//   console.log(i);
// }

