const data = require("./database.js");

function information() {
    return data.characters.map((character) => {
        const specieName = data.species.find(
            (specie) => specie.id === character.speciesId
        );
        return `${character.name} é da espécie ${specieName.name}`;
    });
}