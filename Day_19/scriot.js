
//? Write a function to check if a given string starts with a specific substring.

const startsWith = (str, substr) => {
    // Condition 1
    // return str.startsWith(substr);

    // Condition 2
    return str.toLowerCase().startsWith(substr.toLowerCase())
}
console.log(startsWith("Hello World", "hello")); // C1 Output FALSE, C2 Output TRUE
console.log(startsWith("Hello World", "Hello")); // C1 Output TRUE , C2 Output TRUE
console.log(startsWith("Hello World", "world")); // C1 Output FALSE, C2 Output FALSE