const p = new Promise((res, rej) => {
  let data = "data Received";
  let success =false;
  if(success){
    red(data);
  }else{
    rej();
  }
});

p.
then((data) => {
  console.log(data);
})
.catch(()=> {
  console.log("data not received");
});