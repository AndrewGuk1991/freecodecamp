// Description:

// Next, set health to equal health minus the monster's level. Remember you can get this from the monsters[fighting].level property.

// Solution: 

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= monsters[fighting].level
}