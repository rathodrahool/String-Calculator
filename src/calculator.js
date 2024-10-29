class StringCalculator {
    add(numbers) {
        if(numbers===""){
            return 0;
        } else if(!isNaN(numbers)){
            return parseInt(numbers);
        } else{    
        // Handle multiple numbers
        return numbers
        .split(",") // Split the string by commas
        .map(Number) // Convert each substring to a number
        .reduce((sum, current) => sum + current, 0); // Sum all the numbers
        }
        
    }
}
module.exports = StringCalculator;
