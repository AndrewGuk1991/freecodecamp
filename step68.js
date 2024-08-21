// Description:

// You should now see the same bunch of characters in your console. Your padRow function is doing the exact same thing you were doing earlier, but now it's in a reusable section of its own.

// Use the addition operator to concatenate a single space " " to the beginning and end of your repeated character string.

// Remember that you can use the + operator to concatenate strings like this:

// Example Code
// " " + "string"

// Solution:

function padRow(rowNumber, rowCount) {
    return ' ' + character.repeat(rowNumber) + ' ';
}