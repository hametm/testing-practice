const capitalize = require('./scripts');

test("works", () => {
  expect(capitalize("dumbledore")).toBe("Dumbledore");
});