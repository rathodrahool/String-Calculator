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

    test('should return 3 for the input "1,2"', ()=>{
        expect(calculator.add("1,2")).toBe(3);
    })
    
    test('should return 6 for the input "1,2,3"', () => {
        expect(calculator.add("1,2,3")).toBe(6);
    });

    test('should return 3 for the input "//;\n1;2"', () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('should handle custom delimiters correctly', () => {
        expect(calculator.add("//[;]\n1;2;3")).toBe(6);
    });
});
