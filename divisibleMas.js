
// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
function divisible(){


    let numero = document.getElementById("numero").value;

    if( numero == ''){

        alert("Ingresa un número");
        
    }else if(numero == 0) {
        
        alert("No es divisible por 2, 3, 5 ó 7");
    } else if (numero % 2 == 0 || numero % 3 == 0 || numero % 4 == 0 || numero % 5 == 0){
        alert("Es divisible por 2, 3, 5 ó 7");
    } else {
        alert("No es divisible por 2, 3, 5 ó 7")
    }

}