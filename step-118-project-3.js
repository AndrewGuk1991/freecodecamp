// Description: 

// Display the monsterStats element by updating the display property of the style property to block.

// Solution: 

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = 'block';
}