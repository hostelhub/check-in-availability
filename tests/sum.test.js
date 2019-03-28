const sum = require('../client/src/components/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 5', () => {
  expect(sum(1, 2)).toBe(5);
});

test('adds 1 + 2 to equal 9', () => {
  expect(sum(1, 2)).toBe(9);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(4, 2)).toBe(4);
});