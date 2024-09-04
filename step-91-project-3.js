// Description: 

// Back at the beginning of this project, you created the inventory array. Add the newWeapon to the end of the inventory array using the push() method.

// Solution:

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeaponIndex].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon)
    }
}