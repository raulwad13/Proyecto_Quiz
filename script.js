document
.addEventListener("submit",function(event){

    event.preventDefault();

     const p = event.target
     console.log(event.target.p0.value);

    const opcionElegida = [];
    const parrafos = document.querySelectorAll("input");
    console.log(parrafos);

    for (let index = 0; index < parrafos.length - 1; index++) {
        if(parrafos[index].checked)
            {opcionElegida.push(parrafos[index].value)}
        
    }

    console.log(opcionElegida);
     let correctas = ["c","b","c","a","d","d","c","a","c","d"];


        cantidadAciertos = 0;
        for(i=0; i < correctas.length; i++){
            if(correctas[i]==opcionElegida[i]){
                cantidadAciertos++;

            }
        }
        document.getElementById("resultado").innerHTML = cantidadAciertos;
    })