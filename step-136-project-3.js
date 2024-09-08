// Description: 

// After a monster is defeated, the monster's stat box should no longer display.

// On the first line of the update function, use monsterStats.style.display to change the display value to none.

// Solution: 

function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
  }