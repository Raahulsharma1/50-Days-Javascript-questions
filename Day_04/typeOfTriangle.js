
//?. Write a function called checkTriangleType that takes three parameter represent thee length of the sides of a triangle. The function should return a string indicating the type of triangle:           "Equilateral", "Isosceles", "Scalene".

// Todo The function should adhere to the following rule:
// If all three side are equal length, return "Equilateral".
// If all two side of equal length. return "Isosceles".
// If all three side have different length , return "Scalene".

const checkTriangleType = (a,b,c) => {
    if(a === b && b === c) return "Equilateral";
    if(a === b || b === c || c === a) return "Isosceles";
    return "Scalene";
};
console.log(checkTriangleType(9,9,9));
console.log(checkTriangleType(5,1,5));
console.log(checkTriangleType(3,8,1));