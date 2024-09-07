// Description: 

// Finish the defeatMonster function by calling the update function with locations[4] as the argument.

// Solution: 

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}