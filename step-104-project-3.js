// Description: 

// Inside the if statement, set gold equal to 15 more than its current value. Also update goldText.innerText to the new value.

// Solution: 

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15
        goldText.innerText = gold
    }
}