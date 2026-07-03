// const student1={
//   name:"Rakesh",
//   attendance:0,
//   ispresent:function(){
//     this.attancence++;
//     console.log(
//       `${this.name} is present ,total attendance = ${this.attendance}`
//     );
//   },
// };
// student1.ispresent();

// class Student{
//   constructor(name,attendance){
//     this.name= name; // this is the pointer pointing thee memory
//     this.attendance = attendance;
//   }
//   ispresent(){
//     this.attendance++;
//     console.log(
//       `${this.name} is present . Total Attendance = ${this.attendance} `
//     );
//   };
// }

// const student1 = new Student("Rakesh",0);  // constructor tak bannte h jab hume value dena hota hai  property assign karne ke  liye hota hai
// const student2 = new Student ("Dipu",0);
// student1.ispresent();
// student2.ispresent();



class Student{

  static greet(){
    console.log("Hello , Student")
  }
}

const student1 = new Student(); 
const student2 = new Student ();
// student1 greet();
// student2.ispresent();