const letra_e_encriptada = "enter";
const letra_i_encriptada = "imes";
const letra_a_encriptada = "ai";
const letra_o_encriptada = "ober";
const letra_u_encriptada = "ufat";

const esUnaVocal = (unaLetra) => {
    if (unaLetra == "a" || unaLetra == "e" || unaLetra == "i" || unaLetra == "o" || unaLetra == "u") {
        return true;
    }
    return false;
}

const encriptarLetra = (unaLetra) => {
    let letraEncriptada = "";
    if (unaLetra == "a") {
        letraEncriptada = letra_a_encriptada;
    }
    if (unaLetra == "e") {
        letraEncriptada = letra_e_encriptada;
    }
    if (unaLetra == "i") {
        letraEncriptada = letra_i_encriptada;
    }
    if (unaLetra == "o") {
        letraEncriptada = letra_o_encriptada;
    }
    if (unaLetra == "u") {
        letraEncriptada = letra_u_encriptada;
    }
    return letraEncriptada
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

const desencriptarLetra = (parteEncriptada) => {
    // Esta funcion recibe una cadena que contiene solo una letra como resultado de la desencriptacion
    let res = "";
    if (parteEncriptada == letra_a_encriptada) {
        res = "a";
    }
    if (parteEncriptada == letra_e_encriptada) {
        res = "e";
    }
    if (parteEncriptada == letra_i_encriptada) {
        res = "i";
    }
    if (parteEncriptada == letra_o_encriptada) {
        res = "o";
    }
    if (parteEncriptada == letra_u_encriptada) {
        res = "u";
    }
    return res;
}
const encriptarPalabra = (unaPalabra) => {
    let palabraEncriptada = "";
    let indice = 0;
    while (indice < unaPalabra.length) {
        if (esUnaVocal(unaPalabra[indice])) {
            palabraEncriptada = palabraEncriptada.concat(encriptarLetra(unaPalabra[indice]));
        } else {
            palabraEncriptada = palabraEncriptada.concat(unaPalabra[indice]);
        }
        indice++;
    }
    return palabraEncriptada;
}

const desencriptarPalabra = (unaPalabra) => {
    let palabraDesencriptada = "";
    let indice = 0;
    while (indice < unaPalabra.length) {
        if (esUnaVocal(unaPalabra[indice])) {
            let parteEncriptada = extraerParteEncriptada(unaPalabra.slice(indice));
            if (parteEncriptada.length != 0) {
                palabraDesencriptada = palabraDesencriptada.concat(desencriptarLetra(parteEncriptada));
                indice += parteEncriptada.length;
            } else {
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

const esPalabraValida = (unaCadena) => {
    // El operador not esta para contradecir el booleano que retorna test.\
    // cuando es true indica que hay caracteres que no pertenecen al rango establecido a-z.
    const valoresNoPermitidos = /[^a-z\s]/g;
    let res = true;
    if (valoresNoPermitidos.test(unaCadena)) {
        res = false;
    }
    return res;
}

const mostrarPalabra = (unElementoHTML, unaPalabra) => {
    unElementoHTML.innerHTML = unaPalabra;
    document.getElementById('mostrar-y-ocultar-alerta').style.display = 'none';
    document.getElementById('mostrar-y-ocultar-salida').setAttribute("style", "display: flex;flex-direction: column;row-gap: 1rem;");
    ajustarContenidoSalida();
}

const mostrarMensajeIngresarTexto = () => {
    document.getElementById('mostrar-y-ocultar-alerta').style.display = "flex";
    document.getElementById('mostrar-y-ocultar-salida').style.display = 'none';
}
const esVacio = (unaCadena) => {
    return unaCadena == "";
}
const mostrarMensajeIngresarCaracteresValidos = () => {
    alert("Recuerda que solo puedes ingresar letras minúsculas y sin acentos");
}
const encriptar = () => {
    let elementoHTML = document.getElementById('entrada-texto');
    if (esVacio(elementoHTML.value)) {
        mostrarMensajeIngresarTexto();
    } else {
        if (esPalabraValida(elementoHTML.value)) {
            let elementoHTMLMostrarTexto = document.getElementById('salida-texto');
            const palabraEncriptada = encriptarPalabra(elementoHTML.value);
            mostrarPalabra(elementoHTMLMostrarTexto, palabraEncriptada);
        } else {
            mostrarMensajeIngresarCaracteresValidos();
        }
    }
}

const desencriptar = () => {
    let elementoHTML = document.getElementById('entrada-texto');
    if (esVacio(elementoHTML.value)) {
        mostrarMensajeIngresarTexto();
    } else {
        if (esPalabraValida(elementoHTML.value)) {
            let elementoHTMLMostrarTexto = document.getElementById('salida-texto');
            const palabraEncriptada = desencriptarPalabra(elementoHTML.value);
            mostrarPalabra(elementoHTMLMostrarTexto, palabraEncriptada);
        } else {
            mostrarMensajeIngresarCaracteresValidos();
        }
    }
}


const copiarTexto = async () => {
    let elementoHTML = document.getElementById('salida-texto');
    let textoACopiar = elementoHTML.textContent;
    try {
        await navigator.clipboard.writeText(textoACopiar);
    } catch (err) {
        alert("Error al copiar el texto");
    }
}

// El siguiente codigo se encarga de dimensionar los textarea por donde se ingresan o muestran los mensajes.
const ajustarContenidoEntrada = () =>{
    const textarea = document.getElementById('entrada-texto');
    textarea.addEventListener("keyup", e =>{
        textarea.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    });
}
const ajustarContenidoSalida = () =>{
    const textarea = document.getElementById('salida-texto');
    if (textarea) {
        textarea.style.height = "auto"; // Restablece la altura para obtener el scrollHeight correcto
        textarea.style.height = `${textarea.scrollHeight}px`; // Establece la altura en función del contenido
    }
}
ajustarContenidoEntrada();