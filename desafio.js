function datosUsuario(){
    let nombre= prompt("Ingrese su nombre")
    let apellido= prompt("Ingrese su apellido")
    let dni= prompt("Ingrese su DNI")
    return nombreYApellido= (nombre + " " + apellido)
}


function elegirEntradas(nombreYApellido){
    let suma= 0;
    let seguirComprando= true;
    let recargo= 700

    while(seguirComprando){
        let entradaSeleccionada= parseInt(prompt("Seleccione una entrada:\n 1.Vintage Culture \n 2.KAS:ST \n 3.Nick Warren \n 4.Nacho Bolognani \n 5. MARSH \n 6.Giorgia Angiuli & Layton Giordani"));

        switch(entradaSeleccionada){
            case 1: 
                suma= suma + 4350
            break;

            case 2:
                suma= suma + 4700
            break;

            case 3:
                suma= suma + 6000
            break;

            case 4:
                suma= suma + 1800
            break;

            case 5:
                suma= suma + 2700
            break;

            case 6:
                suma= suma + 4200
            break;

            default:
                alert("La opción elegida es inválida,elija la opción correcta")
            break
        }
        alert("El total es:" + suma)

        let opcionSeguirComprando= prompt("¿Desea seguir comprando? 1.Si, 2.No")

        if(opcionSeguirComprando != 1){
            seguirComprando = false
        }

    }

    let tarjeta= prompt("Abono con 1.Efectivo, 2.Tarjeta")

    if(tarjeta ==2){
        suma= suma + recargo
    }
    alert(nombreYApellido + " el total de su compra es de $" + suma)
}

window.addEventListener("load",function(){
    datosUsuario()
    elegirEntradas(nombreYApellido)
})