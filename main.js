const letra_e_encriptada = "enter";
const letra_i_encriptada = "imes";
const letra_a_encriptada = "ai";
const letra_o_encriptada = "ober";
const letra_u_encriptada = "ufat";

/* Pre-condiciones
    Debe funcionar solo con letras minúsculas
    No deben ser utilizados letras con acentos ni caracteres especiales
    Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
    
    Entrada: gato, Salida: gaitober
*/

const esUnaVocal = (unaLetra) => {
    if (unaLetra == "a" || unaLetra == "e" || unaLetra == "i" || unaLetra == "o" || unaLetra == "u") {
        return true;
    }
    return false;
}

const encriptar = (unaLetra) => {
    let letraEncriptada = "";
    if (unaLetra == "a") {
        letraEncriptada = letra_a_encriptada;
    } else {
        if (unaLetra == "e") {
            letraEncriptada = letra_e_encriptada
        } else {
            if (unaLetra == "i") {
                letraEncriptada = letra_i_encriptada;
            } else {
                if (unaLetra == "o") {
                    letraEncriptada = letra_o_encriptada;
                } else {
                    letraEncriptada = letra_u_encriptada;
                }
            }
        }
    }

    return letraEncriptada
}
const encriptarPalabra = (unaPalabra) => {
    let palabraEncriptada = "";
    let indice = 0;
    while (indice < unaPalabra.length) {
        if (esUnaVocal(unaPalabra[indice])) {
            palabraEncriptada = palabraEncriptada.concat(encriptar(unaPalabra[indice]));
        } else {
            palabraEncriptada = palabraEncriptada.concat(unaPalabra[indice]);
        }
        indice++;
    }
    return palabraEncriptada;
}
const extraerParteEncriptada = (unaPalabra) => {
    let parteEncriptada = "";
    if (unaPalabra.startsWith(letra_a_encriptada)) {
        parteEncriptada = letra_a_encriptada;
    }
    if (unaPalabra.startsWith(letra_e_encriptada)) {
        parteEncriptada = letra_e_encriptada;
    }
    if (unaPalabra.startsWith(letra_i_encriptada)) {
        parteEncriptada = letra_i_encriptada;
    }
    if (unaPalabra.startsWith(letra_o_encriptada)) {
        parteEncriptada = letra_o_encriptada;
    } 
    if (unaPalabra.startsWith(letra_u_encriptada)) {
        parteEncriptada = letra_u_encriptada;
    }
    return parteEncriptada;
}

const desencriptar = (parteEncriptada) => {
    let res = "";
    if (parteEncriptada == letra_a_encriptada) {
        res = "a";
    } else {
        if (parteEncriptada == letra_e_encriptada) {
            res = "e";
        } else {
            if (parteEncriptada == letra_i_encriptada) {
                res = "i";
            } else {
                if (parteEncriptada == letra_o_encriptada) {
                    res = "o";
                } else {
                    res = "u";
                }
            }
        }
    }
    return res;
}

const desencriptarPalabra = (unaPalabra) => {
    let palabraDesencriptada = "";
    let indice = 0;
    while (indice < unaPalabra.length) {
        if (esUnaVocal(unaPalabra[indice])) {
            let parteEncriptada = extraerParteEncriptada(unaPalabra.slice(indice));
            if(parteEncriptada.length != 0){
                palabraDesencriptada = palabraDesencriptada.concat(desencriptar(parteEncriptada));
                indice += parteEncriptada.length;    
            }else{
                palabraDesencriptada = palabraDesencriptada.concat(unaPalabra[indice]);
                indice++;
            }
        } else {
            palabraDesencriptada = palabraDesencriptada.concat(unaPalabra[indice]);
            indice++;
        }
    }
    return palabraDesencriptada;
}


const encriptarYMostrarPalabra = () =>{
    let elementoHTML = document.getElementById('entrada-texto');
    let elementoHTMLMostrarTexto = document.getElementById('salida-texto');
    const palabraEncriptada = encriptarPalabra(elementoHTML.value);
    elementoHTMLMostrarTexto.innerHTML = palabraEncriptada;
}

const desencriptarYMostrarPalabra = () =>{
    let elementoHTML = document.getElementById('entrada-texto');
    let elementoHTMLMostrarTexto = document.getElementById('salida-texto');
    const palabraDesencriptada = desencriptarPalabra(elementoHTML.value);
    elementoHTMLMostrarTexto.innerHTML = palabraDesencriptada;
}
