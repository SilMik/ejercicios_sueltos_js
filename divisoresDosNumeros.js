// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

function divisores(){


    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let menor;
    let mostrar = document.getElementById("mostrar");

    if(numero1 != "" && numero2 != ""){
        if(numero1 < numero2){
            menor = numero1;
        }else{
            menor = numero2;
        }
        for(let i = 2; i<menor; i++){
            if(numero1 % i === 0 && numero2%i === 0) {
                mostrar.innerHTML += (`${i} es divisor de ${numero1} y ${numero2} <br>`);
            }
        }
    } else {
        alert("Ingrese dos numeros")
    }
}

function eliminar(){

    document.getElementById("mostrar").innerHTML = '';

}