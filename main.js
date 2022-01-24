// Inserire Età

// Inserire Km da percorrere


// Stabilisco Prezzo fisso Km
let prezzoKm = 0.21;


// Calcolo Prezzo totale senza sconto
let prezzoTotale = km * prezzoKm;

// Calcolo dello sconto
let sale = 0;

if(eta < 18){
  sale = (prezzoTotale / 100) * 20;
  document.getElementById("age").innerHTML = "Hai ottenuto lo sconto per i Minorenni del 20%";
} else if(eta > 65){
  sale = (prezzoTotale /100) * 40;
  document.getElementById("age").innerHTML = "Hai ottenuto lo sconto per gli Over 65 del 40%";
} else{
  document.getElementById("age").innerHTML = "Non hai i requisiti per ottenere uno sconto."
}

// Calcolo Prezzo Scontato
let salePrice= prezzoTotale - sale;

document.getElementById("price").innerHTML = "Il prezzo del biglietto è: " + salePrice.toFixed(2) + "€";