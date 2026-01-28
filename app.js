// !  Exercise 1:
// A. Use the `map()` method to iterate over the provided `nums` array
//
// B. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// C. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

console.log(numsTimesTwo);
