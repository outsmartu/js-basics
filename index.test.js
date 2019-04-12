const sum = require('./index.js');

describe('basics', () => {

    test('infinity', () => {
        expect(1 / 0).toBe(Infinity)
    });

    test('NaN', () => {
        expect('qwe' * 2).toBe(NaN)
    })

});