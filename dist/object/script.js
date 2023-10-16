const guardar = document.getElementById("guardarDatos");
const mostrar = document.getElementById("mostrarDatos");

let persona = {};

guardar.addEventListener("click", () => {

    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let edad = prompt("Ingrese su edad:");

    persona.nombre = nombre;
    persona.apellido = apellido;
    persona.edad = edad;
    })

persona.mostrarInfo = function() {
  let div = document.getElementById("datos");
  div.innerHTML = "Nombre: " + this.nombre + "<br>";
  div.innerHTML += "Apellido: " + this.apellido + "<br>";
  div.innerHTML += "Edad: " + this.edad + "<br>";
}

mostrar.addEventListener("click", function() {
  persona.mostrarInfo();
});


