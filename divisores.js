// Escribir un programa que escriba en pantalla los divisores de un número 

function divisores(){


    let numero = document.getElementById("numero").value;
    let mostrar = document.getElementById("mostrar");
    if(numero != ""){
        for(let i=2; i<numero;i++){
            if( numero % i === 0){
                mostrar.innerHTML += (`${i} es divisor de ${numero} <br>`);
            }
        }
    } else {
        alert("Ingrese un numero")
    }
}

function eliminar(){

    document.getElementById("mostrar").innerHTML = '';

}