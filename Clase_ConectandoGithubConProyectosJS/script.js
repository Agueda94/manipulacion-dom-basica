 const dato1 = document.getElementById("calculo1");
const dato2 = document.getElementById("calculo2");
const boton = document.getElementById("boton-calcular");
const result = document.getElementById("resultado");
const form = document.getElementById("form"); 
/* const mouse = document.getElementById("mouse"); */

/* mouse.addEventListener("mouseover", mouseactivo); */
form.addEventListener("submit", botonSubmit);

function botonSubmit(event)
{ 

  event.preventDefault();
  const suma = Number(dato1.value) + Number(dato2.value); // obtenemos el valor ingresado al  input y lo convertimos a entero.
  result.innerHTML = "Resultado: " + suma; // para mostrarlo utilizamos la etiqueta p que lleva por id resultado. Que previamente guardamos en la variable result
  
                                           

}

/* function mouseactivo(event){

   event.target.innerHTML = "CAMBIO";
}  */