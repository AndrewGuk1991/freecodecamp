// Description:

// Replace the done reference in your padRow call with rows.length + 1.

// Solution:

let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}