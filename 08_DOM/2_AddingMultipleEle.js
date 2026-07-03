// let arr = ["Rakesh","Rajan","Dipu", "Nippu"];
// const ul = document.querySelector(".moviesList");
// for(let item of arr){
//   ul.innerHTML += `<li>${item}</li>`;
// }

// let arr = [
//   "Avatar",
//   "Spiderman",
//   "Superman",
//   "Manosh",
//   "Superman",
//   "Superman",
//   "Superman",
// ];

// const ul = document.querySelector(".movieList");

// for (let item of arr) {

//   //way1 O(N)
//   // ul.innerHTML += `<li>${item}</li>`;

//   // way 2 O(1)
//   const li=document.createElement("li");
//   li.innerText=`${item}`;

//    ul.appendChild(li);

// }



const ul = document.querySelector(".movieList");
console.log(ul.children);
const li = document.querySelector("#movie2");
console.log(li.parentElement);
console.log(li.previousElementSibling);
console.log(li.nextElementSibling);