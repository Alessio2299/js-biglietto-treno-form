// Create Let

let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");

// Fixed Price
let prezzoKm = 0.21;

// Create event button
let generate = document.getElementById("generate");
let cancel = document.getElementById("cancel");
let randomNumber = Math.floor( Math.random() * 9) + 1;
let codeCp = Math.floor( Math.random() * (100000-90000+1)) + 90000;

generate.addEventListener("click",
  function(){
    // Calculation Price without the sale
    let prezzoTotale = km.value * prezzoKm;
    let sale;

    // Calculation Sale

    if(age.value == "underAge"){
      sale = (prezzoTotale / 100) * 20;
    } else if(age.value == "over65"){
      sale = (prezzoTotale /100) * 40;
    } else{
      sale = 0;
    }

    // Calculation Price with sale
    let salePrice= prezzoTotale - sale;
    document.querySelector(".container-ticket").classList.remove("hidden");
    document.querySelector(".details-name").innerHTML += "<span>" + name.value + "</span>";
    document.querySelector(".carriage").innerHTML += "<span>" + randomNumber + "</span>";
    document.querySelector(".code-CP").innerHTML += "<span>" + codeCp + "</span>";
    document.querySelector(".price-ticket").innerHTML += "<span>" + salePrice.toFixed(2) + "€" + "</span>"; 

  }
)

cancel.addEventListener("click",
  function(){
    document.querySelector(".container-ticket").classList.add("hidden");
    name.value = "";
    km.value = "";
    age.value = ""; 
  }
)
