// Description:

// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

// Solution:

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;