// Description:

// Now you no longer need your done variable. Remove the increment operation from your loop, and the variable declaration for done.

// Solution:

while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}