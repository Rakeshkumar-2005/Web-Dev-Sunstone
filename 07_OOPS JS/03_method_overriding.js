// class Animal {
//   constructor(name){
//     this.name = name;
//   }
//   eat(){
//     console.log(`${this.name} is Eating`);
//   }
//   sleep(){
//     console.log(`${this.name} is Sleeping`);
//   }
// }


// class Dog extends Animal {
//   constructor(name,breed){
//     super(name);
//     this.breed = breed;

//   }
//   eat(){
//     console.log(`${this.name} is Drinking`);
//   }
//   speak(){
//     console.log(`${this.name} Bark Bark ${this.breed} `);
//   }
// }

// const dog1 = new Dog("TOmmy", "Germen Shepherd");
// dog1.speak();
// dog1.eat();


// class Employee {
//   constructor(name,salary){
//     this.name = name;
//     this.salary = salary
//   }
//   work(){
//     console.log(`${this.name} is working`);
//   }
  
// }

// class Developer extends Employee {
//   constructor(name,salary,programming){
//     super(name,salary,);
//     this.programming = programming;

//   }
//   writecode(){
//     console.log(`${this.name} is coding in ${this.programming}`);
//   }
  
// }

// const man = new Developer("Rakesh", "50000","C++");
// man.writecode();


class LibraryBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrowBook() {
    if (this.isAvailable) {
      console.log(`You have borrowed ${this.title} by ${this.author}`);
      this.isAvailable = false;
    } else {
      console.log(`Sorry, ${this.title} by ${this.author} is not available`);
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      console.log(`You have returned ${this.title} by ${this.author}`);
      this.isAvailable = true;
    } else {
      console.log(`You have not borrowed ${this.title} by ${this.author}`);
    }
  }
}

const book1 = new LibraryBook("The Art of Being Alone", "The Art of Being Lazinness ");
book1.borrowBook();
book1.returnBook();
