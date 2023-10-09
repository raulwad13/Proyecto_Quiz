function verificarRespuestas(){

    let total = 10;
    let puntos = 0;

    let myForm = document.forms["formulario"];
    let respuestas = ["c","b","c","a","d","d","c","a","c","d"];

    for(let i = 1; i <= total; i++){
        if(myForm["p"+ i].value === null || myForm["p"+ i].value === ""){
                alert("Por favor, responde la pregunta" +i);
                return false;
        }else{
            if(myForm["p" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span>de<span>'+ total +'</span></h3>';
    return false;

}
































// // Preparar preguntas yrespuestas correctas


// // Donde se guardan las respuestas
// let opcion_elegida = [];

// let cantidad_aciertos = 0;

// // Hacer la función para elegir el numero de pregunta y la elcción

// function respuesta(num_pregunta, seleccionada){
//     // guardar respuesta
//     opcion_elegida [num_pregunta] = seleccionada.value;

//     // maketar para que cambie el color de la seleccionada

//     // id="p" + num_pregunta;

//     // labels = document.getElementById(id).childNodes;
//     // labels[0].style.backgroundsColor = "white";
//     // labels[1].style.backgroundsColor = "white";
//     // labels[2].style.backgroundsColor = "white";
   
//     // Dejar marcada la respuesta seleccionada
//     // seleccionada.parentNodes.style.backgroundsColor = "#cec0fc";
// }


// // Funcion para ver las correctas

// const formulario = document.getElementById("formulario")

// formulario.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(event);
//     cantidad_aciertos = 0;
//     for(i=0; i < correctas.length; i++){
//         if(correctas[i]==opcion_elegida[i]){
//             cantidad_aciertos++;
//         }
//     }
//     document.getElementById("resultado").innerHTML = cantidad_aciertos;
// })





