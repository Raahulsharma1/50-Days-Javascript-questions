
//? Write a function called numberRange that generate an array containing consecutive numbers from a to b ( inclusive ).

//* INPUT:
// a : An integer representing the starting number of the range.
// b : An integer representing the ending number of the range.

const numberRange = (a,b) => {
    let arr = [];
    while ( a <= b) {
        // console.log(a);
        arr.push(a);
        a++;
    }
    return arr;
}
console.log(numberRange(0, 5)); // EXpected Output : [ 0, 1, 2, 3, 4, 5 ]
console.log(numberRange(-1, 5)); // EXpected Output : [-1, 0, 1, 2, 3, 4, 5]

  