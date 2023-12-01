// variabile-1
let textName = prompt('Inserire il proprio nome:');
console.log("nome inserito dall'utente:", textName);


console.log(`
    nome utente:
   ${textName} 
`)

// variabile-2

let textSurname = prompt('Inserire il proprio Cognome:');
console.log("cognome inserito dall'utente:", textSurname);


console.log(`
    cognome utente:
   ${textSurname} 
`)

// variabile-3

let textColor = prompt('Inserire il proprio colore preferito:');
console.log("colore inserito dall'utente:", textColor);


console.log(`
    colore utente:
   ${textColor} 
`)


// variabile-4

let datiUtente = textName + ' ' + textSurname + ' ' + textColor;
console.log(`
    dati utente:
   ${datiUtente} 
`)

// variabile-5

let datiUtenteFinale = datiUtente + ' ' + ('114')
document.writeln (datiUtenteFinale)