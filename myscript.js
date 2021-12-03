const inputdistance = prompt("Inserisci la distanza del tragitto (Km)")

const inputage = parseInt(prompt("Inserisci la tua età"))

console.log (inputdistance)
console.log(inputage)

let ticketprice = (inputdistance * 0.21)

console.log (ticketprice)

if (inputage <= 17){
    finalprice = (ticketprice - ((ticketprice *20)/100));
    console.log (finalprice.toFixed(2))
}else if(inputage >= 65){
    finalprice = (ticketprice - ((ticketprice *40)/100));
    console.log (finalprice.toFixed(2))
}else{
    console.log (ticketprice.toFixed(2))
}




