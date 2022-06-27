const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const analyzeArray = require("./analyzeArray");
const caesarCipher = require("./caesarCipher");

// Capitalize

test("capitalize works", () => {
  expect(capitalize("dumbledore")).toBe("Dumbledore");
});

test("capitalize works with length zero", () => {
  expect(capitalize("")).toBe("");
});

// Reverse string

test("reverseString works", () => {
  expect(reverseString("snape")).toBe("epans");
});

test("reverseString works with spaces", () => {
  expect(reverseString("slytherin rules")).toBe("selur nirehtyls");
});

test("reverseString works with punctuation", () => {
  expect(reverseString("humdinger!")).toBe("!regnidmuh");
});

// Calculator

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

test("calculator divide works with zero denominator", () => {
  expect(calculator.divide(8, 0)).toBeUndefined;
});

// Caesar cipher

test("caesar cipher works", () => {
  expect(caesarCipher("abcdef")).toBe("bcdefg");
});

test("caesar cipher works with z", () => {
  expect(caesarCipher("abcdefz")).toBe("bcdefga");
});

test("caesar cipher works with spaces", () => {
  expect(caesarCipher("abc def")).toBe("bcd efg");
});

// Analyze array

test("analyzeArray average works", () => {
  expect(analyzeArray.average([6, 4])).toBe(5);
});

test("analyzeArray average works with zero", () => {
  expect(analyzeArray.average([0, 0])).toBe(0);
});

test("analyzeArray average works with zero numbers", () => {
  expect(analyzeArray.average([])).toBeUndefined;
});

test("analyzeArray min works", () => {
  expect(analyzeArray.min([6, 4, 8])).toBe(4);
});

test("analyzeArray min works with same numbers", () => {
  expect(analyzeArray.min([8, 8, 8])).toBe(8);
});


test("analyzeArray max works", () => {
  expect(analyzeArray.max([6, 8, 4])).toBe(8);
});

test("analyzeArray max works with same numbers", () => {
  expect(analyzeArray.max([8, 8, 8])).toBe(8);
});

test("analyzeArray length works", () => {
  expect(analyzeArray.length([6, 4])).toBe(2);
});

test("analyzeArray length works with zero length", () => {
  expect(analyzeArray.length([])).toBe(0);
});

