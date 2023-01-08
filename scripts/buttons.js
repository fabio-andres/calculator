let pressOperationKey = false//bandera que detecta si se presiono una tecla de operacion matematica
let pressEqualKey = false//bandera que detecta si se presiono una tecla igual

function displayNum(display, evElement) {
    if (pressEqualKey) {
        display.childNodes[1].textContent = ""
        display.childNodes[3].textContent = ""
        pressEqualKey = false
    }
    display.childNodes[3].textContent += evElement.textContent

    //añade automaticamente un coma cuando se ingrese un numero de 4 digitos y asi obtener por ejemplo 8,888
    if (display.childNodes[3].textContent.length === 4) {
        display.childNodes[3].textContent = insertarCaracter(display.childNodes[3].textContent, ",", 1)
    }

    //añade automaticamente un coma cuando se ingrese un numero de 5 digitos y asi obtener por ejemplo 88,888. en la condicion de comparan 6 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 6) {
        let numWithoutComma = display.childNodes[3].textContent.replace(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 2)
        display.childNodes[3].textContent = numWithFirstComma
    }

    //añade automaticamente un coma cuando se ingrese un numero de 6 digitos y asi obtener por ejemplo 888,888. en la condicion de comparan 7 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 7) {
        let numWithoutComma = display.childNodes[3].textContent.replace(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 3)
        display.childNodes[3].textContent = numWithFirstComma
    }

    //añade automaticamente dos comas cuando se ingrese un numero de 7 digitos y asi obtener por ejemplo 8,888,888. en la condicion de comparan 8 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 8) {
        let numWithoutComma = display.childNodes[3].textContent.replace(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 1)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 5)
        display.childNodes[3].textContent = numWithSecondComma
    }

    //añade automaticamente dos comas cuando se ingrese un numero de 8 digitos y asi obtener por ejemplo 88,888,888. en la condicion de comparan 10 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 10) {
        let numWithoutComma = display.childNodes[3].textContent.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 2)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 6)
        display.childNodes[3].textContent = numWithSecondComma
    }

    //añade automaticamente dos comas cuando se ingrese un numero de 9 digitos y asi obtener por ejemplo 888,888,888. en la condicion de comparan 11 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 11) {
        let numWithoutComma = display.childNodes[3].textContent.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 3)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 7)
        display.childNodes[3].textContent = numWithSecondComma
    }

    //añade automaticamente tres comas cuando se ingrese un numero de 10 digitos y asi obtener por ejemplo 8,888,888,888. en la condicion de comparan 12 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 12) {
        let numWithoutComma = display.childNodes[3].textContent.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 1)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 5)
        let numWithThirdComma = insertarCaracter(numWithSecondComma, ",", 9)
        display.childNodes[3].textContent = numWithThirdComma
    }

    else if (display.childNodes[3].textContent.length === 14) {
        let numWithoutComma = display.childNodes[3].textContent.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 2)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 6)
        let numWithThirdComma = insertarCaracter(numWithSecondComma, ",", 10)
        display.childNodes[3].textContent = numWithThirdComma
    }

    else if (display.childNodes[3].textContent.length === 15) {
        let numWithoutComma = display.childNodes[3].textContent.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 3)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 7)
        let numWithThirdComma = insertarCaracter(numWithSecondComma, ",", 11)
        display.childNodes[3].textContent = numWithThirdComma
    }

    //como en este caso la calculadora se creo para que maximo se puedan ingresar 12 digitos, entonces al ingresar el digito 13 este se debe borrar para asi siempre obtener un numero que sea maximo de 12 digitos por ejemplo 888,888,888,888 osea se borra el ultimo digito. en la condicion de comparan 16 digitos ya que se incluyen las comas
    else if (display.childNodes[3].textContent.length === 16) {
        display.childNodes[3].textContent = eliminarCaracter(display.childNodes[3].textContent, display.childNodes[3].textContent.length)
    }

    //si antes de ingresar un numero ya se  presionado cualquier tecla de oparacion ya sea +, -, x, / entonces al ingresar ese segundo numero modificar el texto de la subpantalla display.childNodes[3] con dicho segundo numero
    if (pressOperationKey) {
        display.childNodes[3].textContent = evElement.textContent
        pressOperationKey = false
    }
}

function insertarComasResultado(resOp) {
    //si el resultado tiene 2 digitos entonces retornarlo tal como esta
    if (resOp.length === 3) {
        return resOp
    }
    //si el resultado es de 4 digitos añade automaticamente un coma
    else if (resOp.length === 4) {
        console.log("aiiii")
        return insertarCaracter(resOp, ",", 1)
    }

    //si el resultado es de 5 digitos añade automaticamente un coma
    else if (resOp.length === 5) {
        return insertarCaracter(resOp, ",", 2)
    }

    else if (resOp.length === 6) {
        return insertarCaracter(resOp, ",", 3)
    }

    else if (resOp.length === 7) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 1)
        return insertarCaracter(numWithFirstComma, ",", 5)
    }

    else if (resOp.length === 8) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 2)
        return insertarCaracter(numWithFirstComma, ",", 6)
    }

    else if (resOp.length === 9) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 3)
        return insertarCaracter(numWithFirstComma, ",", 7)
    }

    else if (resOp.length === 10) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 1)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 5)
        return insertarCaracter(numWithSecondComma, ",", 9)
    }

    else if (resOp.length === 11) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 2)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 6)
        return insertarCaracter(numWithSecondComma, ",", 10)
    }

    else if (resOp.length === 12) {
        let numWithFirstComma = insertarCaracter(resOp, ",", 3)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 7)
        return insertarCaracter(numWithSecondComma, ",", 11)
    }else{
        return "result is too big"
    }
}

function organizarComasAlBorrar(num) {

    if (!num.includes(",")) {
        return num
    }
    else if (num.length === 4) {
        return num.replaceAll(",", "");
    }

    else if (num.length === 5) {
        let numWithoutComma = num.replaceAll(",", "");
        return insertarCaracter(numWithoutComma, ",", 1)
    }

    else if (num.length === 6) {
        let numWithoutComma = num.replaceAll(",", "");
        return insertarCaracter(numWithoutComma, ",", 2)
    }

    else if (num.length === 8) {
        let numWithoutComma = num.replaceAll(",", "");
        return insertarCaracter(numWithoutComma, ",", 3)
    }

    else if (num.length === 9) {
        let numWithoutComma = num.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 1)
        return insertarCaracter(numWithFirstComma, ",", 5)

    }

    else if (num.length === 10) {
        let numWithoutComma = num.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 2)
        return insertarCaracter(numWithFirstComma, ",", 6)
    }

    else if (num.length === 12) {
        let numWithoutComma = num.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 3)
        return insertarCaracter(numWithFirstComma, ",", 7)
    }

    else if (num.length === 13) {
        let numWithoutComma = num.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 1)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 5)
        return insertarCaracter(numWithSecondComma, ",", 9)
    }

    else if (num.length === 14) {
        let numWithoutComma = num.replaceAll(",", "");
        let numWithFirstComma = insertarCaracter(numWithoutComma, ",", 2)
        let numWithSecondComma = insertarCaracter(numWithFirstComma, ",", 6)
        return insertarCaracter(numWithSecondComma, ",", 10)
    }
}

function insertarCaracter(cadena, caracter, pasos) {
    let newString = cadena.slice(0, pasos) + caracter + cadena.slice(pasos);
    return newString
}

function eliminarCaracter(cadena, pasos) {
    let newString = cadena.substring(0, pasos - 1)
        + cadena.substring(pasos, cadena.length);
    return newString
}

//la pantalla de la calculadora se divide en 2 subpantallas. la primer subpantalla es display.childNodes[1] y la segunda subpantalla es display.childNodes[3]
function manipulateTextDisplay(ev) {
    const display = document.querySelector('.display');
    switch (ev.target.textContent) {
        case "0":
            displayNum(display, ev.target)
            break
        case "1":
            displayNum(display, ev.target)

            break
        case "2":
            displayNum(display, ev.target)
            break
        case "3":
            displayNum(display, ev.target)
            break
        case "4":
            displayNum(display, ev.target)
            break
        case "5":
            displayNum(display, ev.target)
            break
        case "6":
            displayNum(display, ev.target)
            break
        case "7":
            displayNum(display, ev.target)
            break
        case "8":
            displayNum(display, ev.target)
            break
        case "9":
            displayNum(display, ev.target)
            break
        case "+":
            display.childNodes[1].textContent = display.childNodes[3].textContent + ev.target.textContent
            pressOperationKey = true
            break
        case "-":
            display.childNodes[1].textContent = display.childNodes[3].textContent + ev.target.textContent
            pressOperationKey = true
            break
        case "x":
            display.childNodes[1].textContent = display.childNodes[3].textContent + ev.target.textContent
            pressOperationKey = true

            break
        case "/":
            display.childNodes[1].textContent = display.childNodes[3].textContent + ev.target.textContent
            pressOperationKey = true

            break
        case "DEL":
            display.childNodes[3].textContent = display.childNodes[3].textContent.substring(0, display.childNodes[3].textContent.length - 1);
            display.childNodes[3].textContent = organizarComasAlBorrar(display.childNodes[3].textContent)
            break
        case "RESET":
            display.childNodes[1].textContent = ""
            display.childNodes[3].textContent = ""
            break
        case "=":
            pressEqualKey = true

            //se elimina el signo de operacion matematica del sting numerico que hay en la subpantalla 1 y se obtiene dicho string numerico
            let num1Str = eliminarCaracter(display.childNodes[1].textContent, display.childNodes[1].textContent.length)

            //se obtiene el string numerico de la subpantalla 2
            let num2Str = display.childNodes[3].textContent

            //los siguientes if eliminan la coma de los numeros de tipo string de las subpantallas 1 y 2
            if (display.childNodes[1].textContent.includes(",") && display.childNodes[3].textContent.includes(",")) {
                num1Str = num1Str.replaceAll(",", "")
                num2Str = num2Str.replaceAll(",", "")
            }
            else if (display.childNodes[1].textContent.includes(",")) {
                num1Str = num1Str.replaceAll(",", "")

            }
            else if (display.childNodes[3].textContent.includes(",")) {
                num2Str = num2Str.replaceAll(",", "")
            }

            let num1 = Number(num1Str)
            let num2 = Number(num2Str)

            if (display.childNodes[1].textContent.includes("+")) {
                let resAdd = num1 + num2

                //la respuesta de la operacion se convierte en string para poder añadirle las comas
                let resAddString = String(resAdd)
                display.childNodes[1].textContent = `${num1} + ${num2} =`
                display.childNodes[3].textContent = insertarComasResultado(resAddString)
            }

            else if (display.childNodes[1].textContent.includes("-")) {
                let resSubt = num1 - num2
                let resSubtString = String(resSubt)
                display.childNodes[1].textContent = `${num1} - ${num2} =`
                display.childNodes[3].textContent = insertarComasResultado(resSubtString)
            }
            else if (display.childNodes[1].textContent.includes("x")) {
                let resMult = num1 * num2
                let resMultString = String(resMult)
                display.childNodes[1].textContent = `${num1} x ${num2} =`
                display.childNodes[3].textContent = insertarComasResultado(resMultString)
            }
            else if (display.childNodes[1].textContent.includes("/")) {
                let resDiv = num1 / num2
                let resDivString = String(resDiv)
                display.childNodes[1].textContent = `${num1} / ${num2} =`
                display.childNodes[3].textContent = insertarComasResultado(resDivString)
            }
            break
        default:
            return "Not found…";
    }
}

class mathOperation {

    constructor() {

    }

    calcBtns() {
        const display = document.querySelector('.display');
        const numBtn = document.querySelectorAll('.key-all');
        numBtn.forEach(btn => {
            btn.addEventListener('click', manipulateTextDisplay);
        });
    }
}

export default { mathOperation }


