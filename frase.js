// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
function cantidadA(){

    let texto = document.getElementById("letraA").value;

    let mostrar = document.getElementById("mostrar_contador");

    let contador = 0;

    for (let i = 0; i<texto.length; i++){
        if(texto[i] === "a" || texto[i] ==="A"){
            contador += 1;
        }
    }
    mostrar.innerHTML = `La cantidad de letras a es: ${contador}`;
}   