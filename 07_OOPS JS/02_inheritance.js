// class Animal{
//   eat(){
//     console.log("Animal is Eating");
//   }
//   sleep(){
//     console.log("Animal is Sleeping ")
//   }
// }

// class Dog extends Animal{
//   speak(){
//     console.log("Bark Bark");
//   }
// }

// const tommy  =  new Dog();
// tommy.speak();
// tommy.sleep();


class Animal {
  constructor(name){
    this.name = name;
  }
  eat(){
    console.log(`${this.name} is Eating`);
  }
  sleep(){
    console.log(`${this.name} is Sleeping`);
  }
}


class Dog extends Animal {
  constructor(name,breed){
    super(name);
    this.breed = breed;

  }
  speak(){
    console.log(`${this.name} Bark Bark ${this.breed} `);
  }
}

const dog1 = new Dog("TOmmy", "Germen Shepherd");
dog1.speak();
dog1.eat();