// Create Let

let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");
let underAge = 17;
let adult = 18;
let over65 = 65;


// Stabilisco Prezzo fisso Km
let prezzoKm = 0.21;

// Create event button
let button = document.getElementById("generate");
let randomNumber = Math.floor( Math.random() * 9) + 1;
let codeCp = Math.floor( Math.random() * (100000-90000+1)) + 90000;

button.addEventListener("click",
  function(){
  // Calcolo Prezzo totale senza sconto
    let prezzoTotale = km.value * prezzoKm;
    let sale;

  // Calcolo dello sconto

    if(underAge < 18){
      sale = (prezzoTotale / 100) * 20;
    } else if(over65 >= 65 ){
      sale = (prezzoTotale /100) * 40;
    } else{
      sale = 0;
    }
    console.log(age.value)
    // Calcolo Prezzo Scontato
    let salePrice= prezzoTotale - sale;

    document.querySelector(".details-name").innerHTML += "<span>" + name.value + "</span>";
    document.querySelector(".carriage").innerHTML += "<span>" + randomNumber + "</span>";
    document.querySelector(".code-CP").innerHTML += "<span>" + codeCp + "</span>";
    document.querySelector(".price-ticket").innerHTML += "<span>" + salePrice.toFixed(2) + "€" + "</span>";
    
  
    
  }
)

