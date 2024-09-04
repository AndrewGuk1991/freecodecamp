// Description:

// Now that you are updating the gold and health variables, you need to display those new values on the game screen. You have retrieved the healthText and goldText elements in a prior step.

// After your assignment lines, assign the innerText property of goldText to be the variable gold. Use the same pattern to update healthText with the health variable.

// You can test this by clicking your "Go to store" button, followed by your "Buy Health" button.

// Note: Your answer should only be two lines of code.

// Solution: 

function buyHealth() {
    gold -= 10;
    health += 10;
    goldText.innerText = gold
    healthText.innerText = health
}