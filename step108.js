// Description:

// Directly below your numbers array, declare a shifted variable and assign it the result of calling .shift() on the numbers array. On the next line, log the shifted variable to the console.

// Solution:

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted)
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);