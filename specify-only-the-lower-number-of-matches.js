// Description:

// Change the regex timRegex to match the word Timber only when it has four letter m's.

// Solution:

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);