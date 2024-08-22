// Description:

// Now move your .unshift() call into your if block.

// Solution:

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    }
}