const { createCounter, createPerson } = require("../encapsulation.js");
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
