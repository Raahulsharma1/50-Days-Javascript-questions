
// Q. Hash Tag Generator.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// You are required to implement a function generateHashTag that generate a hash tah form a given input.

// The input string should be converted to a hash tag formate, where each word is capitalized and concatenated together without spaces.

// If the length of the input string is greater than 280 character or if the input sting is empty or contain only whitespace the function should return false.

// Otherwise, the function should return generated hash tah predefine with #.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

const generateHashTag = (str) => {
if(str.length > 280 || str.trim() === 0){
    return false;
}
str = str.split(" ")
str = str.map((currElem) =>
// currElem.replace(currElem[0], currElem[0].toUpperCase())   // We have two ways to solve this question 1.
currElem.charAt(0).toUpperCase() + currElem.slice(1)          // 2nd is this.
);
str = `#${str.join("")}`;
// console.log(str);
return str;
}



console.log(generateHashTag("my name is rahul sharma"));