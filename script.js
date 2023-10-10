// Declarar el "submit" y las funciones.
document
.addEventListener("submit",function(event){

    event.preventDefault();

     const p = event.target
     console.log(event.target.p0.value);

    const opcionElegida = [];
    const parrafos = document.querySelectorAll("input");
    console.log(parrafos);

    // Declarar un for que recorra "parrafos" -1 para no tener en cuenta el "input corregir" y que pushe la opcion elegida en el array vacio.

    for (let index = 0; index < parrafos.length - 1; index++) {
        if(parrafos[index].checked)
            {opcionElegida.push(parrafos[index].value)}
        
    }

    console.log(opcionElegida);
    let correctas = ["c","b","c","a","d","d","c","a","c","d"];

    // Recorre el array "correctas" y en caso de la "opcionElegida" ser correcta suma un punto.
    cantidadAciertos = 0;
    for(i=0; i < correctas.length; i++){
            if(correctas[i]==opcionElegida[i]){
                cantidadAciertos++;

            }
        }
        if (opcionElegida.length < correctas.length) {
     // Mostrar una alerta si faltan respuestas.
            alert("Por favor, responde todas las preguntas antes de enviar el formulario...");
        } else {
        document.getElementById("resultado").innerHTML = cantidadAciertos;
    }})