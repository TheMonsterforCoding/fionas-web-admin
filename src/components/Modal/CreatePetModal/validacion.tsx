
export const nombreMascotaEvento= document.getElementById("nombreMascota");
nombreMascotaEvento.addEventListener("keypress",validadorNombreMascota)
function validadorNombreMascota(){
    const mensajeNombreMascota= document.getElementById("mensajeNombreMascota")
    const encontrarNumero=new RegExp('\d');
    console.log(nombreMascotaEvento.value)
    if(encontrarNumero.test(nombreMascotaEvento.value)){
      mensajeNombreMascota.textContent="Un nombre de mascota no puede tener números";
    }else if(nombreMascotaEvento.value.length>=10){
       mensajeNombreMascota.textContent="Un nombre de mascota no puede tener más de 10 caracteres";
    }else{
        mensajeNombreMascota.textContent="";

    }
}

export const sizeEvento= document.getElementById("size");
sizeEvento.addEventListener("keypress",validarSize)
function validarSize(){
    const mensajeSize= document.getElementById("mensajeSize")
    const encontrarLetra=new RegExp('\D');
    if(sizeEvento.value.length=2){
        var textoAnterior=sizeEvento.value[1];
        sizeEvento.value[1]=",";
        sizeEvento.value[2]=textoAnterior;


    }
    if(encontrarLetra.test(sizeEvento.value)){
      mensajeSize.textContent="el tamaño de la mascota no puede tener letras";
    }else if(nombreMascotaEvento.value.length>=4){
        mensajeSize.textContent="";
    }else{
        mensajeSize.textContent="";

    }
}

