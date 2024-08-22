// Description:

// The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. The syntax is similar to the equality operator: value !== 4.

// Update your while loop condition to check if done is not equal to count.

// Solution:

while (done !== count) {
    done++;
    rows.push(padRow(done, count));
    if (done === count) {
        continueLoop = false;
    }
}