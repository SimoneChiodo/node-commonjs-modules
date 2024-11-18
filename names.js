// Funzione che unisce nome e cognome in un unico oggetto
function createNames(firstName, lastName) {
    return { firstName, lastName };
}

module.exports = { createNames };

// Funzione che crea oggetti dato un array
function createObject(...arrayElement) {
    return Object.assign({}, arrayElement);
    // NOTA:
    // Il nome delle proprietà sono gli indici dell'array)
}
