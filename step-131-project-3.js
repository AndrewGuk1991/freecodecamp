// Description: 

// Set xp to xp plus the monster's level.

// Solution: 

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp += monsters[fighting].level;
}