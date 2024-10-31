# Incubyte TDD Assessment - String Calculator

This repository contains my solution for the **Incubyte TDD Assessment**, designed to evaluate my Test-Driven Development (TDD) skills and adherence to software craftsmanship principles.

## Overview

The purpose of this assessment is to implement a `StringCalculator` class using TDD principles, demonstrating how I approach software development with a focus on readability, testability, and incremental improvements. This project showcases my ability to build reliable and maintainable code by following a structured TDD process.

## Table of Contents

- [Objectives](#objectives)
- [Features](#features)
- [Development Approach](#development-approach)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Commit History](#commit-history)
- [Conclusion](#conclusion)

## Objectives

As part of this assessment, I was required to implement a `StringCalculator` with the following specifications:

1. **Addition of comma-separated numbers** with special cases:
   - An empty string should return `0`.
   - A single number should return that number.
   - Multiple numbers separated by commas should return their sum.

2. **Support for newline delimiters**: Newlines between numbers should be treated as valid separators (e.g., `"1\n2,3"` returns `6`).

3. **Custom Delimiters**: The beginning of the string can specify a custom delimiter in the format `"//[delimiter]\n[numbers…]"`.

4. **Negative Number Handling**: If negative numbers are provided, the calculator should throw an error listing all negative numbers.

5. **Handling Large Numbers**: Large numbers beyond the safe integer range should not affect the calculated result.

## Features

The `StringCalculator` implementation includes the following features:

1. **Addition with Comma-Separated Input**
   - Input: `""` → Output: `0`
   - Input: `"1"` → Output: `1`
   - Input: `"1,2"` → Output: `3`

2. **Newline Delimiters**
   - Input: `"1\n2,3"` → Output: `6`

3. **Custom Delimiters**
   - Input: `"//;\n1;2"` → Output: `3`
   - Custom delimiters can be specified at the beginning of the input.

4. **Negative Numbers Exception**
   - Input with negative numbers throws an error: `"negative numbers not allowed -2, -4"`.

5. **Large Number Handling**
   - Only numbers within the safe integer range are included in the sum.

## Development Approach

For this assessment, I followed a structured TDD approach:

1. **Red (Fail)**: Wrote a test for each requirement, ensuring it failed initially.
2. **Green (Pass)**: Implemented minimal code to make each test pass.
3. **Refactor**: Improved code readability and maintained compliance with best practices after each test passed.

### Key Implementation Steps

1. **Basic Addition**: Started with simple cases for adding one or more numbers.
2. **Newline and Custom Delimiters**: Enhanced the `add` method to handle newline and custom delimiters.
3. **Negative Numbers Handling**: Added validation to throw an error for negative inputs.
4. **Large Number Validation**: Included logic to handle large numbers beyond safe limits.

## Project Structure

- **src/**: Contains the `StringCalculator` class.
- **test/**: Contains test cases that validate each functionality.
- **README.md**: Project documentation.
- **package.json**: Contains project dependencies and configurations.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rathodrahoool/String-Calculator.git
   cd String-Calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To use the `StringCalculator`, create an instance and call the `add` method:

```javascript
const StringCalculator = require('./src/calculator');

const calculator = new StringCalculator();
console.log(calculator.add("1,2,3")); // Output: 6
```

## Testing

Run the tests to validate the `StringCalculator`:

```bash
npm test
```

Tests include cases for:
- Empty strings
- Single and multiple numbers
- Newline and custom delimiters
- Negative number handling
- Large number validation

## Commit History

Each feature and test case was committed separately to demonstrate the TDD process and incremental development. View the full commit history [here](https://github.com/rathodrahoool/String-Calculator/commits/main).

## Conclusion

This assessment allowed me to showcase my understanding of TDD and software craftsmanship. By following TDD principles, I was able to build a solution that is both reliable and maintainable, meeting Incubyte’s standards for readability and testability.
