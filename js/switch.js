let datosParaSwitch = prompt("Ingresar datos(Si ingresa ESC termina)");

while(datosParaSwitch != "ESC"){

    switch (datosParaSwitch) {
        case "Nintendo":
            console.log("Hola Nintendo switch")            
            break;

        case "Play":
            console.log("Hola Playstation switch")
    
        default:
            console.log("Quien eres");
            break;
    }
    datosParaSwitch = prompt("Ingresar datos(Si ingresa ESC termina)");
}