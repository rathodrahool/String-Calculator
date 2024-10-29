const StringCalculator = require('../src/calculator');

describe('String Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return 1 for the input "1"', () => {
        expect(calculator.add("1")).toBe(1);
    });
    
});
