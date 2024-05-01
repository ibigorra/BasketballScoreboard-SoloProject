let home = 0;
let guest = 0;
let homeScore = document.getElementById(homescore);
let guestScore = document.getElementById(guestscore);

function incrementHomeOne() {
    home += 1;
    homescore.textContent = home;
}

function incrementHomeTwo() {
    home += 2;
    homescore.textContent = home;
}

function incrementHomeThree() {
    home += 3;
    homescore.textContent = home;
}

function incrementGuestOne() {
    guest += 1;
    guestscore.textContent = guest;
}

function incrementGuestTwo() {
    guest += 2;
    guestscore.textContent = guest;
}

function incrementGuestThree() {
    guest += 3;
    guestscore.textContent = guest;
}

function reset() {
    home = 0;
    guest = 0;
    homescore.textContent = 0;
    guestscore.textContent = 0;
}

