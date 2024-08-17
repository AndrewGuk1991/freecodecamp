// Description:

// Change the regex timRegex to match the word Timber only when it has four letter m's.

// Solution:

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);