const data = require("./database.js");

function getCharacterBySpecie(id) {
    const result = data.characters.find((character) => {
        return character.speciesId === id;
    });
    return result;
}

console.log(getCharacterBySpecie());