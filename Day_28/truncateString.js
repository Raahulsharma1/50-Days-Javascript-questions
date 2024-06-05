
//? Write a function called truncateString that takes two parameters:

//* str: A string that needs to be truncated.
//* maxLength: An integer representing the maximum length of the string allowed.
//* The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add ' ... ' to the end of the truncated string.

const truncateString = (str, num) => {

    if ( num <= 0) {
        return str;
    } else if ( str.length > num) {
        return str.slice( 0, num).concat(" ... ");
    }

    // Second Approach using Ternary Operator...
    

    return num <= 0 ? str : str.slice(0, num).concat(" ... ")
       
}

console.log(truncateString("Hello, This is Rahul Sharma ", 20));