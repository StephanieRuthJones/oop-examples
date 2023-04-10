const {
  createCounter,
  createPerson,
  BankAccount,
} = require("../encapsulation.js");
describe("createCounter works", () => {
  test("getCount should return the initial count", () => {
    const counter = createCounter();
    expect(counter.getCount()).toBe(0);
  });

  test("increment should increase the count by 1", () => {
    const counter = createCounter();
    counter.increment();
    expect(counter.getCount()).toBe(1);
  });

  test("decrement should decrease the count by 1", () => {
    const counter = createCounter();
    counter.increment();
    counter.increment();
    counter.decrement();
    expect(counter.getCount()).toBe(1);
  });
});

describe("createPerson", () => {
  test("getName should return the person's name", () => {
    const person = createPerson("John Doe", 30);
    expect(person.getName()).toBe("John Doe");
  });

  test("getAge should return the person's age", () => {
    const person = createPerson("John Doe", 30);
    expect(person.getAge()).toBe(30);
  });
});

describe("BankAccount", () => {
  test("getBalance should return the initial balance", () => {
    const account = new BankAccount(1000);
    expect(account.getBalance()).toBe(1000);
  });

  test("deposit should add the specified amount to the balance", () => {
    const account = new BankAccount(1000);
    account.deposit(500);
    expect(account.getBalance()).toBe(1500);
  });

  test("withdraw should subtract the specified amount from the balance", () => {
    const account = new BankAccount(1000);
    account.withdraw(500);
    expect(account.getBalance()).toBe(500);
  });

  test("deposit should throw an error for negative amounts", () => {
    const account = new BankAccount(1000);
    expect(() => account.deposit(-500)).toThrow("Invalid amount");
  });

  test("withdraw should throw an error for negative amounts", () => {
    const account = new BankAccount(1000);
    expect(() => account.withdraw(-500)).toThrow("Invalid amount");
  });

  test("withdraw should throw an error for amounts greater than the balance", () => {
    const account = new BankAccount(1000);
    expect(() => account.withdraw(1500)).toThrow("Invalid amount");
  });
});
