function primos(){


    let numero = document.getElementById("numero").value;
    let mostrar = document.getElementById("mostrar");
    let primo = true; 
    if(numero != ""){
        for(let i=2; i<numero;i++){
            if( numero % i === 0){
                primo = false;
            }
        }
        if(primo){
            mostrar.innerHTML = `${numero} es primo`;
        } else {
            mostrar.innerHTML = `${numero} no es primo`;
        }
    } else {
        alert("Ingrese un numero")
    }
}