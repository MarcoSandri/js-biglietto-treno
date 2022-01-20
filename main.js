// Informazioni utente
let eta = prompt("Inserisca la sua età");
let distance = prompt("Inserisca i kilometri che deve fare");


let price = distance * 0.21;
let discountedPrice;

if (eta < 18) {
    discountedPrice = price * 80 / 100;

} else if (eta > 65) {
    discountedPrice = price * 60 / 100;
} else {
    discountedPrice = price;
}




document.getElementById('discounted').innerHTML = discountedPrice.toFixed(2);