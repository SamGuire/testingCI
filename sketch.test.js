const sum = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4);
});
test('adds 1 + 100 to equal 101', () => {
    expect(sum(1, 100)).toBe(101);
});