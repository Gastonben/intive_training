const { expect } = require("@jest/globals");
const {
  arr,
 upperFirst,
 upperLast,
 upperMiddle,
 findBaz,
 emptyArray

} = require('./script');

test('upper the first letter', () => {
  expect(upperFirst("str")).toBe("Str");
});

test('upper the last letter', () => {
  expect(upperLast("str")).toBe("stR");
});

test('upper the middle letter', () => {
  expect(upperMiddle("javascripts")).toBe("javasCripts");
});

test('find the element baz', () => {
  expect(findBaz(arr)).toBe("baz");
});

test('empty array', () => {
  expect(emptyArray(arr)).toBe(0);
});