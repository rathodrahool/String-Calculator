class StringCalculator {
    add(numbers) {
        if(numbers==="") return 0;
        if(!isNaN(numbers)) return parseInt(numbers);
    }
}
module.exports = StringCalculator;
