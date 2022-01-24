// Create Let

let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");

// Create event button
let button = document.getElementById("generate");

button.addEventListener("click",
  function(){
    alert("My name is" + name.value + km.value + age.value)
  }
)
// Stabilisco Prezzo fisso Km
let prezzoKm = 0.21;

// Calcolo Prezzo totale senza sconto
let prezzoTotale = km * prezzoKm;

// Calcolo dello sconto
let sale = 0;

if(age < 18){
  sale = (prezzoTotale / 100) * 20;
} else if(age > 65){
  sale = (prezzoTotale /100) * 40;
} else{
  sale = 0;
}

// Calcolo Prezzo Scontato
let salePrice= prezzoTotale - sale;
