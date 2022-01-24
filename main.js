// Create Let

let name = document.getElementById("name");
let km = document.getElementById("km");
let age = document.getElementById("age");
let generate = document.getElementById("generate");
let cancel = document.getElementById("cancel");
let container = document.querySelector(".container-ticket");
let offer = document.getElementById("ticket");
let details = document.querySelector(".details-name");
let carriage = document.querySelector(".carriage");
let code = document.querySelector(".code-CP");
let priceTicket = document.querySelector(".price-ticket");
let randomNumber = Math.floor( Math.random() * 9) + 1;
let codeCp = Math.floor( Math.random() * (100000-90000+1)) + 90000;

// Create Const
const spanName = document.createElement("span");
const spanCarriage = document.createElement("span");
const spanCode = document.createElement("span");
const spanPrice = document.createElement("span");

// Fixed Price
const prezzoKm = 0.21;

// Create event button

generate.addEventListener("click",
  function(){
    // Calculation Price without the sale
    let prezzoTotale = km.value * prezzoKm;
    let sale;

    // Calculation Sale
    if(age.value == "underAge"){
      sale = (prezzoTotale / 100) * 20;
      offer.innerHTML = "Biglietto Under";
    } else if(age.value == "over65"){
      sale = (prezzoTotale /100) * 40;
      offer.innerHTML ="Biglietto Over";
    } else{
      sale = 0;
      offer.innerHTML ="Biglietto Standard";
    }

    // Calculation Price with sale
    let salePrice= prezzoTotale - sale;
    container.classList.remove("hidden");
    spanName.innerHTML = name.value;
    details.append(spanName);
    spanCarriage.innerHTML = randomNumber;
    carriage.append(spanCarriage);
    spanCode.innerHTML = codeCp;
    code.append(spanCode);
    spanPrice.innerHTML = salePrice.toFixed(2) + "€";
    priceTicket.appendChild(spanPrice);
  }
)

cancel.addEventListener("click",
  function(){
    container.classList.add("hidden");
    name.value = "";
    km.value = "";
    age.value = "";
  }
)
