function eliminarCaracter(cadena, posicionCaracter) {
    let newString = cadena.substring(0, posicionCaracter - 1)
        + cadena.substring(posicionCaracter, cadena.length);
    return newString
}
console.log(eliminarCaracter("5,55", 2))