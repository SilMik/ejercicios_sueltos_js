function generar(evt) {

  evt.preventDefault();
  let opciones = document.getElementById("nombre").value;

  if(opciones === ""){
    alert("No se puede agregar un nombre vacio");
  } else {
    let opcion = `<li> ${opciones} </li>`;
    let mostrar = document.getElementById("mostrar_texto");
    mostrar.innerHTML += opcion;
  }
}
