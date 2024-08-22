// Description:

// When inverted is false, you want to build a standard pyramid. Use .push() like you have in previous steps to achieve this.

// Solution:

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}