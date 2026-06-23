function sayGoodbye(){
  console.log("Goodbye");
}
function executeAction(action){
  console.log("executeAction....");
  action();
}

executeAction(sayGoodbye);