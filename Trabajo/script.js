// Preparar respuestas correctas
let correctas = [3,2,3,1,4,4,3,1,3,4];

// Donde se guardan las respuestas
let opcion_elegida = [];

let cantidad_aciertos = 0;

// Hacer la función para elegir el numero de pregunta y la elcción

function respuesta(num_pregunta, seleccionada){
    // guardar respuesta
    opcion_elegida [num_pregunta] = seleccionada.value;

    // maketar para que cambie el color de la seleccionada

    id="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[].style.backgroundsColor = "white";
    labels[].style.backgroundsColor = "white";
    labels[].style.backgroundsColor = "white";
   
    seleccionada.parentNodes.style.backgroundsColor = "#cec0fc";
}

// Funcion para ver las correctas
function corregir(){
    cantidad_aciertos = 0;
    for(i=0; i < correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_aciertos++;
        }
    }
    document.getElementById("respuesta").innerHTML = cantidad_aciertos;
}
