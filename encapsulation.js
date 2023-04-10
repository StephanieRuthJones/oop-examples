//In this code, we define a Person class with a constructor that sets the person's name and age properties.

class Person {
  //A constructor is a special method that is used to create and initialize objects that are created from a class.
  //The constructor is automatically called when a new object is created using the new keyword, and it is responsible for setting up the initial state of the object.
  //The constructor is defined using the constructor keyword followed by a set of parentheses that can take any number of parameters.
  //Inside the constructor, you can define properties and methods that are specific to the object being created.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // The class also has a method getBirthYear() that calculates the person's birth year based on their age
  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
  //It also has a setAge() method that allows us to update the person's age.
  setAge(newAge) {
    this.age = newAge;
  }
  // The important thing to note here is that the getBirthYear() and setAge() methods are encapsulated within the Person class.
  // This means that the details of how these methods work are kept local to the class and are not exposed to the rest of the program.
}
//When we create a new instance of the Person class, we can access the name property using john.name
//and the getBirthYear() method using john.getBirthYear(),
//but we don't need to know how the getBirthYear() method works under the hood.
const john = new Person("John", 30);

console.log(john.name); // Output: "John"
console.log(john.getBirthYear()); // Output: 1993

john.setAge(35);

console.log(john.getBirthYear()); // Output: 1988

//Encapsulation is helpful in this example because it allows us to hide the implementation details of the Person class
//and make it easier to change the behavior of the class without affecting the rest of the program.

// For example, if we decide to change the way the getBirthYear() method calculates the birth year
//(e.g., if we decide to use a different time zone or date format),
//we can make the change within the Person class without having to update the rest of the program.
//This is because the getBirthYear() method is encapsulated within the class and its details are hidden from the rest of the program.
// Encapsulation also helps prevent unintended modification of the object's state by external code,
//ensuring that the object's data remains consistent and valid.

// ===== Closure ===== //
//Objective: Write a createCounter function that returns an object with three methods (increment, decrement, and getCount)
//that allow you to increment and decrement a counter and get its current count.
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

// ===== Factory Function ===== //
//Objective: Write a factory function that returns an object with two properties (name and age) and two methods (getName and getAge)
//that allow you to get the name and age of the object.
function createPerson(name, age) {
  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
  };
}
module.exports = { createCounter, createPerson };
