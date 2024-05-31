
//? Write a function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the number of times each element appears in the array.

// Here's what the function should do:
// Accept an array of numbers as input
// Create an empty object called counts to store the counts of each element.
// Iterate through each number in the array.
// For each number, increment the count in the counts object.
// If the count for a number does not exist yet, initialize it to 1.
// Return the counts object containing the counts of each element.

const numbers = [1, 2, 2, 3, 1, 4, 2];
let counts = {};

for(let element of numbers) {
    counts[1] = (counts[element] || 0) + 1;
}
console.log(counts);

// Expected Output: { '1': 2, '2':3, '3':1, '4':1}

