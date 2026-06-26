function createCounter(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  };
}
let func = createCounter();
func();
func();
func();


let func2 = createCounter(); // closure  => count-0
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();
func2();