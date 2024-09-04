// Description: 

// Update the string "You now have a new weapon." to "You now have a " followed by the name of the new weapon, and remember to end the sentence with a period.

// Solution: 

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeaponIndex].name;
        text.innerText = "You now have a " + newWeapon + '.';
    }
}