// Importo le funzioni
const { createNames } = require("./names.js");
const { createHobbies } = require("./hobbies.js");

function createPerson() {
    // Versione: "Nomi uniti"
    // return {
    //     name: createNames("Nome", "Cognome"),
    //     hobbies: createHobbies("Hobby1", "Hobby2", "Hobby3"),
    // };

    // Versione: "Nomi separati"
    let result = createNames("Nome", "Cognome");

    return Object.assign(result, createHobbies("Hobby1", "Hobby2", "Hobby3"));
}

console.log(createPerson());
