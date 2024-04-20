 
//? Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

const calculateAverage = (arr) => {
    let total = arr.reduce((accum, curElm) => accum + curElm, 0)
    console.log(total);
    return total / arr.length;
}
console.log(calculateAverage([2, 4, 6, 9]));