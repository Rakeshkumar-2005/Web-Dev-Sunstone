// function defination 
function greet(name){
  // return "hello,"+ name+"!";
  return `hello, ${name}!` //tempelate literal
}

let message = greet("Ankit");
console.log(message);

const expression = function(name){ // funnction expression
  return "hello,"+ name+"!";
};
console.log(expression("Rakesh"));


const arrowFunc = (name) => {
  return `Hello, ${name}`;
};
console.log(arrowFunc("Amkit"));