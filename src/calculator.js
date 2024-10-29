
class StringCalculator {
    constructor() {
        this.defaultDelimiter = ',';
    }

    add(numbers) {
        if (!numbers) return 0;

        const { delimiters, numberString } = this.extractDelimitersAndNumbers(numbers);
        const numberArray = this.splitNumbers(numberString, delimiters);
        return this.sumNumbers(numberArray);
    }

    extractDelimitersAndNumbers(numbers) {
        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            const delimiterSection = parts[0].substring(2); // Get the delimiter part
            const numberString = parts[1]; // Get the numbers part

            // Handle multiple delimiters if present
            const delimiters = delimiterSection.split(/[\[\]]+/).filter(Boolean); // Split on [ and ]
            return { delimiters, numberString };
        }

        return { delimiters: [this.defaultDelimiter], numberString: numbers };
    }

    splitNumbers(numberString, delimiters) {
        // Create a regex pattern from delimiters
        const regexPattern = delimiters.join('|'); // Join delimiters with | for regex OR
        return numberString.split(new RegExp(regexPattern)).map(Number);
    }

    sumNumbers(numberArray) {
        const negatives = numberArray.filter(num => num < 0);
        if (negatives.length > 0) {

            throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);

        }

        return numberArray.reduce((sum, current) => sum + current, 0);
    }
}

module.exports = StringCalculator;
