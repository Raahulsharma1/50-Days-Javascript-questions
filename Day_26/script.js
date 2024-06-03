
//? Write a function to find the nth Fibonacci number.

//Todo syntax: F(n) = F(n-1) + F(n-2), Where F(1) = F(2) = 1.

const fibonacci = (num) => {
    if (num <= 1) {
        return num
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
console.log(fibonacci(0)); //Expected Output: 0
console.log(fibonacci(5)); //Expected Output: 5
console.log(fibonacci(9)); //Expected Output: 34
