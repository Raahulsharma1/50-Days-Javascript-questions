
//? Write a function findMax that takes an arrays of numbers as input and return the maximum number in the array.

//--------------- This approach is for numbers -----------------------

// const findMax = () => {
//     return Math.max( 1, 5, 9, 10, 80, 90 )
// }

// console.log(findMax());



const findMax = (arr) => {
    return Math.max( ...arr);
}

console.log(findMax([1,4,5,8,9,90,7]));
console.log(findMax([-2,-4,-9]));
console.log(findMax([9]));