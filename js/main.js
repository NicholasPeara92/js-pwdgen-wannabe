// 1. Chiedi all’utente il suo nome,

const firstName = prompt(" inserisci il tuo nome");

// 2. poi chiedi il suo cognome,

const secondName = prompt(" inserisci il tuo cognome");

// 3. poi chiedi il suo colore preferito

const favouriteColor = prompt(" inserisci il tuo colore preferito");

// 4. Infine scrivi sulla pagina nomecognomecolorepreferito76

const password = firstName + secondName + favouriteColor + 76;

console.log(password);

document.getElementById("password").innerHTML = password;
