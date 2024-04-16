
//* Sort an Array.

//? Write a function to sort an array of numbers in an ascending order.

// Todo Requirements
/* 

` The function should take an array of numbers as input.
` It should return a new array with the number sorted in ascending array.
` The original array should remain unchanged.
` You are not allowed to use the built-in sort() method.

*/

const sortArray = (arr) => {
    return arr.sort((a, b) => a - b );
}
console.log(sortArray([9, 5, 1, 3, 8, 10, 2, 4, 7, 6]));

