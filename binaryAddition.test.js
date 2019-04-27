const binaryAddition = require('./binaryAddition');

test('check if input is valid', () => {
    expect(binaryAddition('string', 1)).toBeFalsy();
});

test('check if result is converted to binary', () => {
    expect(binaryAddition(1,2)).toBe('11');
});