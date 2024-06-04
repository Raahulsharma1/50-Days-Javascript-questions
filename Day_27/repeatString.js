
//? Write a function called repeatString that takes two parameters:( str or num ) 

//* str: A string that needs to be repeated.
//* num: an integer repeating the number of times the string should be repeated.
//* The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str, num) => {
    return str.repeat(num);
}

console.log(repeatString("Rahul", 4));