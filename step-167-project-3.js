// Description: 

// In this step, create a for loop where i is initialized to 0, the loop runs as long as i is less than 10, and i is incremented by 1 after each iteration using the increment operator ++.

// Solution: 

function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {

    }
}