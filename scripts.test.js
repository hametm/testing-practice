const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const analyzeArray = require("./analyzeArray");

test("capitalize works", () => {
  expect(capitalize("dumbledore")).toBe("Dumbledore");
});

test("reverseString works", () => {
  expect(reverseString("snape")).toBe("epans");
});

test("calculator add works", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("calculator subtract works", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("calculator multiply works", () => {
  expect(calculator.multiply(1, 7)).toBe(7);
});

test("calculator divide works", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

test("analyzeArray average works", () => {
  expect(analyzeArray.average([6, 4])).toBe(5);
});

test("analyzeArray min works", () => {
  expect(analyzeArray.min([6, 4, 8])).toBe(4);
});

test("analyzeArray max works", () => {
  expect(analyzeArray.max([6, 8, 4])).toBe(8);
});

test("analyzeArray length works", () => {
  expect(analyzeArray.length([6, 4])).toBe(2);
});

