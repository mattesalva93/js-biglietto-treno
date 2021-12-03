const inputdistance = parseInt(prompt("Inserisci la distanza del tragitto (Km)"))

const inputage = parseInt(prompt("Inserisci la tua età"))

console.log (inputdistance)
console.log(inputage)

let ticketprice = (inputdistance * 0.21)

console.log (ticketprice)

if (inputage <= 17){
    console.log (ticketprice - ((ticketprice *20)/100));
}else if(inputage >= 65){
    console.log (ticketprice - ((ticketprice *40)/100));
}else{
    console.log (ticketprice)
}
