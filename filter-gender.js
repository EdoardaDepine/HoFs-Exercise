const data = require("./database.js");

function filterByGender(gender) {
    if (gender === "M" || gender === "F") {
        const result = data.characters.filter((character) => {
            return character.gender === gender;
        });
        return result.length;
    } else {
        return "Valor inválido!";
    }
}

console.log(filterByGender());