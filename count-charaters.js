const data = require("./database.js");

function countCharacters() {
    return data.characters.length;
}

console.log(countCharacters());