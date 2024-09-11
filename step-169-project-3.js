// Description: 

// After your for loop, add an if statement to check if the guess is in the numbers array. You can use the .includes() method to check if the array contains the guess.

// Solution: 

function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }
    if (numbers.includes(guess)) {

    }
}