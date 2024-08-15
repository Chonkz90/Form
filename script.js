/*
-Hente knappen og sette opp en hendelse
-Hente inout verdi fra nettsiden
-Hente valg verdi
-Gjøre utregning
-Hente resultat paragraf og vise utregning
*/

function unitConverter (event) {
    event.preventDefault()
    
console.log("Virker du?")
}

const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", unitConverter);

