let words = ["apple","banana","cat","elephant","dog"];
let total = words.reduce((total, word) => total + word.length, 0);
console.log(total);