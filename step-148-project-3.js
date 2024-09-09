// Description: 

// Use the return keyword to return the value of hit at the end of the function.

// Solution: 

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
}