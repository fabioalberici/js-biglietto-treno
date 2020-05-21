//domande iniziali d'informazione
var etaCliente = parseInt(prompt ('Quanti anni hai?'));
var kmCliente = parseInt(prompt('Quanti km devi percorrere?'));

var biglietto = kmCliente * 0.21;

if (etaCliente < 18) {
  //se minorenne
  var sconto = biglietto * 20 / 100;
  biglietto = biglietto - sconto;
} else if (etaCliente > 65) {
  // se over 65
  var sconto = biglietto * 40 / 100;
  biglietto = biglietto - sconto;
}

document.getElementById('costo').innerHTML = biglietto.toFixed(2) + '€';


console.log(kmCliente);
console.log(etaCliente);
console.log(biglietto);
