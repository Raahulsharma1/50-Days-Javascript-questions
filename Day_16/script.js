
//? Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

const findMin = (arr) => {
    if (arr.length === 0) return "Array is Empty "
    return Math.min(...arr);
}

console.log(findMin([5, 10, 2, 8]));
console.log(findMin([5, -2, 0, 12, -7]));
console.log(findMin([]));