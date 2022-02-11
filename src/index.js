import validator from './validator.js';
document.getElementById("botonValidar").addEventListener("click", numeroTarjeta);

function numeroTarjeta () {
 let cardNumber = document.getElementById("tarjeta").value;
 validator.isValid(cardNumber);
 let isValid = validator.isValid(cardNumber);
  respuesta (isValid)
  validator.maskify(cardNumber);
  let array = validator.maskify(cardNumber);
  document.getElementById("tarjeta").value = array; 
}

function respuesta (isValid) {

  if (isValid == true){
  alert("Tú tarjeta es válida."  + " " + "\u2714");
  }

  else {
  alert("Tú tarjeta no es válida." + " " + "\u274c");
  }
  
  
}
  