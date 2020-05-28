// DOM
// los selectores de clase empiezan con un .
// los selectores de id empiezan con un #
// los selectores de etiqueta que empiezan con la etiquetan < >

//querySelectorAll => recorre todo el DOM buscando todos los elementos que cumplan con el criterio de busqueda.
//querySelector => devuekve solo un alemento asi hayan muchos (el primero)

/*
let links = document.querySelectorAll('a');

//recorrer areglo
links.forEach(function(link){
  console.log(link);
});
*/


/*
imprime click en la consola ca de vez que se hace click
let celdas = document.querySelectorAll("td");

celdas.forEach((td) => {
  td.addEventListener("click",function(){
    console.log("click");
  })
});
*/


//PASOS
//Obtener los elementos de la clase .close

let casa = document.querySelectorAll(".home")

//Recorrerlos

casa.forEach((casa) => {
  //agregar evento click
  casa.addEventListener("click",function(evento){
    evento.preventDefault()


  /*
    ME GENERO UN ERROR CON RESPECTO AL REMOVE QUE NO SUPE AL FINAL QUE FUE
    
  let content = document.querySelectorAll(".content")

    //quitarles las clases de animacion que ya tienen
      content.classList.remove("fadeInLeft");
      content.classList.remove("animated");

    // Agregar clases para animar su salida fadeOutUp

    content.classList.add("fadeOutUp");
    content.classList.add("animated");

*/
    setTimeout(function(){
      location.href="../index.html"

    },600)


    return false;
  });
});



/*
let iconos = document.querySelectorAll("i");

iconos.forEach((icono) => {
  icono.classList.remove("fa-star");
})
*/
