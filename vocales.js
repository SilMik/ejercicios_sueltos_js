// Escribe un programa que pida una frase y escriba las vocales que aparecen

function vocales(){

    let texto = document.getElementById("texto").value;

    let mostrar = document.getElementById("mostrar");

    for(let i = 0; i<texto.length; i++){

        if( texto.substr(i,1) === 'a' || texto.substr(i,1) === 'e' || texto.substr(i,1) === 'i' || texto.substr(i,1) === 'o' || texto.substr(i,1) === 'u'){
           mostrar.innerHTML += texto.substr(i,1);
        }
    }
}