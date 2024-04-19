
//? Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integer less than or equal to n. The factorial of 0 is defined as 1.

// Here are some example of Factorial calculation.

// Factorial(0) = 1
// Factorial(1) = 1
// Factorial(2) = 2
// Factorial(3) = 6
// Factorial(4) = 24
// Factorial(5) = 120


const factorial = (num) => {
    let fact = 1;
    for( let i = 1; i <= num; i++){

        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(10));