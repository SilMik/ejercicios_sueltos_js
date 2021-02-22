// Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
function divisible(){


    let numero = document.getElementById("numero").value;

    if( numero == ''){

        alert("Ingresa un número");
        
    }else if(numero == 0) {
        
        alert("No es divisible por 2, 3, 5 ó 7");

    } else if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0){
        if(numero % 2 == 0) {
            alert("El numero es divisible por 2")
        }
        if(numero % 3 == 0){
            alert("El numero es divisible por 3")
        }
        if(numero % 5 == 0){
            alert("El numero es divisible por 5")
        }
        if(numero % 7 == 0){
            alert("El numero es divisible por 7")
        }
    } else {
        alert("No es divisible por 2, 3, 5 ó 7")
    }

}