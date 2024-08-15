/*
-Hente knappen og sette opp en hendelse X
-Hente input verdi fra nettsiden
-Hente valg verdi
-Gjøre utregning
-Hente resultat paragraf og vise utregning
*/

function unitConverter (event) {
    event.preventDefault()

    const unitInput = parseFloat (document.querySelector("#unitInput").value)
    console.log(unitInput);
    console.log(typeof unitInput);

    const unitFrom = document.querySelector("#unitFrom").value;
    console.log(unitFrom);
    const unitTo = document.querySelector("#unitTo").value;
    console.log(unitTo);
    let displayResult = document.querySelector("#displayResult");
    console.log(displayResult);

    if (unitFrom === "MM" && unitTo ==="CM"){
        // Kalkulering
        displayResult.textContent = unitInput /10;
    } else if (unitFrom === "MM" && unitTo === "M"){
        // Kalkulering
        displayResult.textContent = unitInput /1000;
    }    else if (unitFrom === "MM" && unitTo === "KM"){
        // Kalkulering
        displayResult.textContent = unitInput /1000000;
    }    else if (unitFrom === "CM" && unitTo === "MM"){
        // Kalkulering
        displayResult.textContent = unitInput *10;
    }    else if (unitFrom === "CM" && unitTo === "M"){
        // Kalkulering
        displayResult.textContent = unitInput /10;
    }    else if (unitFrom === "CM" && unitTo === "KM"){
        // Kalkulering
        displayResult.textContent = unitInput /100;
    }    else if (unitFrom === "M" && unitTo === "MM"){
        // Kalkulering
        displayResult.textContent = unitInput *1000;
    }    else if (unitFrom === "M" && unitTo === "CM"){
        // Kalkulering
        displayResult.textContent = unitInput *100;
    }    else if (unitFrom === "M" && unitTo === "KM"){
        // Kalkulering
        displayResult.textContent = unitInput /1000;
    }    else if (unitFrom === "KM" && unitTo === "MM"){
        // Kalkulering
        displayResult.textContent = unitInput *1000000;
    }    else if (unitFrom === "KM" && unitTo === "CM"){
        // Kalkulering
        displayResult.textContent = unitInput *10000;
    }    else if (unitFrom === "KM" && unitTo === "M"){
        // Kalkulering
        displayResult.textContent = unitInput *1000;
    } else {
        // MM til MM
        // CM til CM
        // M til M
        // KM til KM
        // Error
        displayResult.textContent = "Velg to ulike målenheter."
        displayResult.style.color="red"
    }
}

const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", unitConverter);

