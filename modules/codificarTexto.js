const { analizarTexto } = require('../modules/analizarTexto')


function codificarTexto(texto){
    const resultado = analizarTexto(texto);
    
    const arreglo = resultado.caracteres;

    const codigoBinario = []

    for(let i = 0; i < arreglo.length; i++){
        const letra = arreglo[i];
        let codigoAscii = letra.charCodeAt(0);
        let binario = codigoAscii.toString(2);
        codigoBinario.push(binario);
    }
    
    return codigoBinario;
}

module.exports = { codificarTexto };