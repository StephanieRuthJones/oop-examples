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
