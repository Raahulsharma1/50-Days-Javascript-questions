
// Write a function findLongestWord that takes string as input and return the longest word in the string. If there are multiple longest words return first one?

//* CONSTRAINTS
//? The input string may contain alphabetic character, number, space, punctuation
//? The input string is non-empty
//? The input string may contain multiple words separated with space

//* NOTE
//? If the input string is empty or contains only whitespace, the function should return false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


const findLongestWord = (str) => {
    if(str.trim().length === 0) {
        return false;
    }

    strArr = str.split();
    // console.log(strArr);
    words = str.split(" ");
    return words.reduce(

    (accum, curWord) => (curWord.length > accum.length ? curWord : accum) , ""
);
};













console.log(
    findLongestWord("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
);