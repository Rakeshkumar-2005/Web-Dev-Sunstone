let student={
  name:"Rakesh kumar",
  age:20,
  ispass:true,
  dog:function (){
    return "bark";
  }

}

student["city"] = "indore";
student.grade = "A";
console.log(student)
console.log(student.dog());

