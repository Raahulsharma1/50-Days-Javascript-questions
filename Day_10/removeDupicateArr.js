
//? Write a function that takes an array of integers an input and removes any duplicate elements, returning a new array  whit only the unique elements.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    // console.log(newArr);
    return newArr
};


console.log(removeDuplicates([1, 1, 3, 4, 5, 9, 3, 5, 2, 6])); 
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));

