const data = require("./database.js");

function isFighter() {
    data.characters.forEach((character) => {
        if (character.powers.length >= 1) {
            character.isFighter = true;
        } else {
            character.isFighter = false;
        }
    });
    return data.characters;
}