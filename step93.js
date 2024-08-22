// Description:

// Your loop is no longer relying on the continueLoop variable. This makes the variable an unused declaration. Generally, you want to avoid unused declarations to prevent future confusion.

// Remove your continueLoop variable.

// Solution:

let done = 0;

while (done !== count) {
  done++;
  rows.push(padRow(done, count));
}