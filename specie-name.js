const data = require("./database.js");

function speciesName() {
  const result = data.species.reduce((pv, cv) => {
    return [...pv, cv.name];
  }, []);

  return result;
}

console.log(speciesName());
