// Create Let

let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");

// Stabilisco Prezzo fisso Km
let prezzoKm = 0.21;

// Calcolo Prezzo totale senza sconto
let prezzoTotale = km.value * prezzoKm;
console.log(prezzoTotale);

// Calcolo dello sconto
let sale;

if(age.value < 18){
  sale = (prezzoTotale / 100) * 20;
} else if(age.value > 65){
  sale = (prezzoTotale /100) * 40;
} else{
  sale = 0;
}

// Calcolo Prezzo Scontato
let salePrice= prezzoTotale - sale;

// Create event button
let button = document.getElementById("generate");
let randomNumber = Math.floor( Math.random() * 9);
console.log(randomNumber);
button.addEventListener("click",
  function(){
    document.querySelector(".details-name").innerHTML += "<span>" + name.value + "</span>";
    document.querySelector("carriage").innerHTML += "<span>" + randomNumber + "</span>";
  }
)

