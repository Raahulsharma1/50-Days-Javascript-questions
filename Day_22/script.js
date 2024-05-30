
//? Write a Javascript function findMedian(arr) that takes an array of numbers as input and returns the median value.If the array has an even number of elements, return the average of the two middle values.

const findMedian = (arr) => {
    
    console.log(arr.sort((a, b) => a - b));
    let length = arr.length;
    let mid = Math.floor(length / 2);
    
    if(length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        return arr[mid];
    }
};

console.log(findMedian([5, 3, 5, 1, 7])); // Expected Output 5
console.log(findMedian([2, 4, 6, 8])); // Expected Output 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Expected Output 6
