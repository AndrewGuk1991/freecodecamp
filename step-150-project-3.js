// Description: 

// In your attack function, find the line of code that updates the monsterHealth variable and place it within an if block with a condition that calls the isMonsterHit function.

// Solution: 

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth
    if (isMonsterHit()) {
        monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1
    }
    if (health <= 0) {
        lose();
    } else if (monsterHealth <= 0) {
        if (fighting === 2) {
            winGame();
        } else {
            defeatMonster();
        }
    }
}