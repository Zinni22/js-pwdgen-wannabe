// chiedo il nome all'utente
const nome = prompt("Inserisci il tuo nome");
console.log("l'utente si chiama", nome);

// chiedo il cognome all'utente
const surname = prompt("Inserisci il tuo cognome");
console.log("il cognome dell'utente è", surname);

// chiedo il colore preferito all'utente
const color = prompt("Inserisci il tuo colore preferito");
console.log("il colore preferito dell'utente è", color);


//Unisco i dati per creare la password
let password = nome+ ' ' +surname+ ' ' +color+ ' '+22;
console.log = (password)

//Compare tutto nel foglio HTML
document.getElementById("my-id").innerHTML = password;