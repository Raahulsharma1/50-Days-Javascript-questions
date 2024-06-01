
//? Write a function called findMode that takes an array of number as input and eturns the mode of the array ( The number that appears most frequently).

function findMode(arr) {
    let counts = {};
    let maxNum = {};
    let mode;

    for (let element of arr) {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxNum);
        maxNum= counts[element];
        mode = element;
    }
    console.log(counts);
    return mode;
}
console.log(findMode([1, 2, 3, 4, 6, 4, 6, 9, 6]));
