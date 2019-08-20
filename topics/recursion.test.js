const { powLoop, powRecursion } = require('./recursion');

test('pow (loop)', () => {
    expect(powLoop(2, 10)).toBe(1024)
    expect(powLoop(2, 3)).toBe(8)
    expect(powLoop(2, 0)).toBe(1)
})

test('pow (recursion + ternary)', () => {
    expect(powRecursion(2, 3)).toBe(8)
})