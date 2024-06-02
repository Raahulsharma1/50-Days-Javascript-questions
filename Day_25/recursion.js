
//? Write a function to calculate the factorial of a number. ( using recursion).

// Eg. 9 => 9*8*7*6*5*4*3*2*1

const factorial = (num) => {
    if ( num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
};
console.log(factorial(9)); // Expected Output 362880
