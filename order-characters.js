const data = require("./database.js");

function orderCharacteres(parm) {
    const result = data.characters.sort((a, b) => {
        return a[parm].localeCompare(b[parm]);
    });
    return result;
}

console.log(orderCharacteres());