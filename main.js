// Informazioni utente
let eta = prompt("Inserisca la sua età");
let distance = prompt("Inserisca i kilometri che deve fare");


// Prezzi
let price = distance * 0.21;
let discountedPrice;


// Controllo dati inseriti
if (isNaN(parseInt(eta)) || isNaN(parseInt(distance))) {
    document.getElementById('error').innerHTML = "INSERIRE DATI VALIDI";
} else {
    // Calcolo sconto
    if (eta < 18) {
        discountedPrice = price * 80 / 100;
        document.getElementById('oldprice').innerHTML = price + "€";
    } else if (eta > 65) {
        discountedPrice = price * 60 / 100;
        document.getElementById('oldprice').innerHTML = price + "€";
    } else {
        discountedPrice = price;
    }
}

// Restituisce sconto a schermo
document.getElementById('discounted').innerHTML = discountedPrice.toFixed(2);
document.getElementById('age').innerHTML = eta;
document.getElementById('discounted').innerHTML = discountedPrice.toFixed(2) + "€";

// Generatore random di numero di sedile e numero del treno
let seat = Math.floor(Math.random() * 100) + "A";
let number = Math.floor(Math.random() * 1000000);

document.getElementById('seat').innerHTML = seat;
document.getElementById('number').innerHTML = number;

document.getElementById('seat-cutting').innerHTML = seat;
document.getElementById('number-cutting').innerHTML = number;