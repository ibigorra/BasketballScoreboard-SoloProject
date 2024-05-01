let home = document.getElementById(homescore);
let guest = document.getElementById(guestscore);

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
    homescore.textContent = 0;
    guestscore.textContent = 0;
}

