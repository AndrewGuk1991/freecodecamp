// Description:

// You will also need to update the functions that run when the buttons are clicked again.

// In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.

// Solution: 

function goStore() {
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
}