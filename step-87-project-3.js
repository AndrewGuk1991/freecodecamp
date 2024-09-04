// Description: 

// You should tell the player what weapon they bought. In between the two lines you just wrote, use let to initialize a new variable called newWeapon. Set this to equal weapons.

// Solution: 

function buyWeapon() {
    if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++;
        goldText.innerText = gold;
        let newWeapon = weapons;
        text.innerText = "You now have a new weapon.";
    }
}