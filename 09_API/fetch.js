// let url = "https://jsonplaceholder.typicode.com/todos";
// const list  = document.querySelector("#list");
// const btn = document.querySelector("#btn");

// //console.log(url);

// // fetch ek promise hai
// // fetch(url).then((data) =>{
// //   return data.json;
// // }).then((data) =>{
// //   //console.log(data);
// //   for(let i = 0;i<data.length;i++){
// //     //console.log(data[i].title);
// //     let li = document.createElement("li");
// //     li.innerText = data[i].title;
// //     list.appendChild(li); 
// //   }
// // })
// // .catch((err) => {
// //   console.log(err);
// // })

// function addTaskToList(data){
//     for(let i = 0;i<data.length;i++){
//     let li = document.createElement("li");
//     li.innerText = data[i].title;
//     list.appendChild(li);
//     }
// }
// // fetch ek data hai
// fetch(url).then((data) =>{
//   return data.json;
// }).then((data) => {
//   // console.log(data);
//   addTaskToList(data);
// })



// let xhr = new XMLHttpRequest();

// btn.addEventListener("click", () => {
//   xhr.open("GET", url);
//   xhr.send();
// });

// xhr.onload = () => {
//   let data = JSON.parse(xhr.responseText);
//   addTaskToList(data);
// };

// xhr.onerror = (err) => {
//   console.log(err);
// }


// 

// let url = "https://jsonplaceholder.typicode.com/todos";
// const ul = document.querySelector("#list");
// const btn = document.querySelector("#btn");
// function addTaskToList(data) {
//   for (let i = 0; i < data.length; i++) {
//     const li = document.createElement("li");
//     li.innerText = data[i].title;
//     ul.appendChild(li);
//   }
// }
// btn.addEventListener("click", () => {
//   axios
//     .get(url)
//     .then((res) => {
//       // console.log(data.data);
//       data = res.data;
//       addTaskToList(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });


let apikey ="adbe8deffbbf577d55b7f8a348b91d11";
const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");

const getUrl = (cityname) => {
  return ``;
};

btn.addEventListener("click",() => {
  // console.log(inp.value.trin());
  let value = inp.value.trin();
  let url = getUrl(value);
  inp.value="";
});
