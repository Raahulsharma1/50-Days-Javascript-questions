
//? Write a function to determine whether a given string is palindrome or not. 
    A palindrome is a word phrase, number, or other sequence of characters that reads the same from forward and backward,
    ignoring spaces, punctuation and capitalization.

// Constraints :

// The input string may contain letters, digits, space, punctuation and special characters.

// The function should be case-insensitive, meaning "Racecar" and "racecar" should be consider the same.

// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.

// The function should return true if the input string is a palindrome and false otherwise.

//--------------------------------------------------------------------------------------------------------------------

// NOTE :

// .replace(/\W/g, ""): Usages the replace() method with a regular expression (/\W/g) to remove all non-word characters from string. Here:

// \W matches any non-word character (equivalent to (^a-z, A-Z, 0-9 _ ))

// The g flag performs a global search, meaning it replaces all occurrences of non-word character in the  string.

// So, replace(/\W/g,"") replaces all non-words characters with an empty string, effective removing them from the string


const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let r_str = str.split("").reverse().join("");
    console.log(r_str);
    return str === r_str ? true : false
}

console.log(isPalindrome("A man, a plan, a cancal, panama"));

console.log(isPalindrome("racecar"));

console.log(isPalindrome("hello"));
