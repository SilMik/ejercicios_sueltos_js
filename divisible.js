// Escribe un programa que pida un número y diga si es divisible por 2
function divisible(){


    let numero = document.getElementById("numero").value;

    if( numero == ''){

        alert("Ingresa un número");
        
    }else if(numero == 0) {
        
        alert("No es divisible por dos");
    } else if (numero % 2 == 0){
        alert("Es divisible por dos");
    } else {
        alert("No es divisible por dos")
    }

}