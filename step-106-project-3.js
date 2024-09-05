// Description: 

// Use the shift() method to take the first element from the inventory array and assign it to your currentWeapon variable.

// Solution: 

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
    }
}