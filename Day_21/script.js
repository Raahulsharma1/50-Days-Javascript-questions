
//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

const calculateMean = (arr) => {
    if(arr.length === 0) {
        return 0;
    }
    
    let sum = arr.reduce((accum, curElem) => accum + curElem, 0)
    return sum / arr.length;
};

console.log(calculateMean([1, 2, 3, 4, 5])); // Expected Output : 3
console.log(calculateMean([10, 20, 30])); // Expected Output : 20
console.log(calculateMean([-2, 0, 2])); // Expected Output : 0
console.log(calculateMean([])); // Expected Output : 0
