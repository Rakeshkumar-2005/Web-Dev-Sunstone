const ul=document.querySelector(".classList");
for(let i=1;i<=100;i++){
   const li=document.createElement("li");
    // if(i%3==0 && i%5==0)
    // {
    //     li.innerHTML="fizzBuzz";
    // }  
    // else if(i%3==0){
    //     li.innerHTML="fizz";
    // }
    // else if(i%5==0){
    //     li.innerHTML="Buzz";
    // }
    // else{
    //     li.innerHTML=i;
    // }
    // ul.appendChild(li);
    let text="";
    if(i%3==0)  text+="fizz";
    if(i%5==0)  text+="buzz";
    li.innerText = text =="" ?i:text;
    ul.appendChild(li);
}