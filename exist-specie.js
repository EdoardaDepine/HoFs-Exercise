const data = require("./database.js");

function existingSpecie(specieName) {
    let names = [];
    if (data.species.some((specie) => specie.name === specieName) === true) {
        let findId = data.species.find((element) => element.name === specieName);
        for (let i = 0; i < data.characters.length; i++) {
            if (findId.id === data.characters[i].speciesId) {
                names.push(data.characters[i].name);
            }
        }
    }
    return names;
}

console.log(existingSpecie("Saiyans"));