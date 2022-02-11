const validator =  {
    isValid (cardNumber) {
    if (cardNumber == " " ){
      return false;
    }

    let array = cardNumber.split(""); 
    let arrayReversa = array.reverse();
    for(let i=1; i < arrayReversa.length; i=i+2) {


     let multiplicacion = arrayReversa[i];
     let resultadoMultiplicacion = multiplicacion *2;
     arrayReversa[i] = resultadoMultiplicacion;
     

           if (resultadoMultiplicacion > 9) {
           let arrayNumerosPares = resultadoMultiplicacion.toString();
           let numeros = arrayNumerosPares.split("");
           let separarNumerosMultiplicacion1 = parseInt(numeros [0]);
           let separarNumerosMultiplicacion2 = parseInt(numeros [1]);
           let sumarDigitos = separarNumerosMultiplicacion1 + separarNumerosMultiplicacion2; 
           arrayReversa[i] = sumarDigitos; 
         
  }
  }
    let numeroTotal = 0;
    //console.log(arrayReversa);
    for (let i=0; i <arrayReversa.length; i+=1) {
      arrayReversa[i] = parseInt(arrayReversa[i]);
      numeroTotal = numeroTotal + arrayReversa[i];
      
    }

    //console.log(numeroTotal);
    let modulo = numeroTotal%10;
    if (modulo == 0) {
      return true;
    } 
    else{
      return false;
    }
 
},

maskify(cardNumber) {
  let array = cardNumber.split("");

for (let i=0; i<array.length -4; i++){
  array[i] = "#";
}
return array.join("") 

}

};


export default validator;
