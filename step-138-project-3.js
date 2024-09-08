// Description: 

// At the end of your code, create a restart function. Inside this function, set xp to 0, health to 100, gold to 50, currentWeaponIndex to 0, and set inventory to an array with the string stick.

// Also update the innerText properties of goldText, healthText, and xpText to their current values.

// Finally, call the goTown() function.

// Solution: 

function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeaponIndex = 0;
    inventory = ['stick'];
    xpText.innerText = xp;
    healthText.innerText = health;
    goldText.innerText = gold;
    goTown();
}