//ENCAPSULATION
//A fundamental concept in OOP that allows objects to protect their data and behavior from external access and modification.
//It provides a mechanism for creating self-contained, modular objects that can be used in complex systems without fear of unwanted interference from other parts of the program.
//In JavaScript, encapsulation can be achieved using closures, factory functions, or ES6 classes.

// ===== Closure ===== //
//Objective: Write a createCounter function that returns an object with three methods (increment, decrement, and getCount) that allow you to increment and decrement a counter and get its current count.
//Comprehension Question: How does closure allow us to create a private variable in the createCounter function?
//Answer: In the createCounter function, the private variable count is created within the function's scope and is not accessible from outside the function. However, the functions returned by the createCounter function (increment, decrement, and getCount) are closures that have access to the count variable in their outer scope. This means that the count variable is enclosed within the closure and is not accessible from outside of it. By returning an object with methods that have access to the count variable, we create a public interface that allows us to interact with the count variable indirectly, without exposing it directly to the outside world. This encapsulation ensures that the count variable is protected and can only be modified through the interface provided by the closure. In summary, closures allow us to create private variables by enclosing them within a function's scope and providing public methods to interact with them. This technique of encapsulation helps to protect the variables from external modification and ensures that they can only be accessed and modified through a controlled interface.
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

// ===== ES6 Class ===== //
//Objective: Write an ES6 class for a bank account that encapsulates the account balance and provides publicly accessible methods to deposit and withdraw funds.
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount < 0 || amount > this._balance) {
      throw new Error("Invalid amount");
    }
    this._balance -= amount;
  }

  getBalance() {
    return this._balance;
  }
}

module.exports = { createCounter, createPerson, BankAccount };
