class StringCalculator {
    constructor() {
        this.defaultDelimiter = ',';
    }

    add(numbers) {
        if (!numbers) return 0;

        const { delimiter, numberString } = this.extractDelimiterAndNumbers(numbers);
        const numberArray = this.splitNumbers(numberString, delimiter);
        return this.sumNumbers(numberArray);
    }

    extractDelimiterAndNumbers(numbers) {
        // Check for custom delimiter
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n");
            const delimiter = parts[0].substring(2);
            return { delimiter, numberString: parts[1] };
        }

        return { delimiter: this.defaultDelimiter, numberString: numbers };
    }

    splitNumbers(numberString, delimiter) {
        return numberString.split(delimiter).map(Number);
    }

    sumNumbers(numberArray) {
        return numberArray.reduce((sum, current) => sum + current, 0);
    }
}

module.exports = StringCalculator;
