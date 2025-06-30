/* 
    Quiero que armes una función que:
1) Reciba un texto.
2) Convierta ese texto en un array de caracteres individuales.
3) (por ahora) lo muestre por consola para verificar que funciona.
*/


// MÓDULOS
const readline = require('readline');

// Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



// FUNCION 2: Convertir texto a array de caracteres individuales.
function manejarPalabra (texto){
    let arrayPalabra = Array.from(texto);
    console.log('\nArray de caracteres:', arrayPalabra);
    detectarMayusMinus(texto)
    rl.close();
} 


// FUNCION EXTRA: Detectar mayusculas y minusculas para saber que array de letras corresponderia (a futuro)
function detectarMayusMinus(texto){
    const letras = Array.from(texto);

    const mayusculas = letras.filter(letra => letra === letra.toUpperCase() && letra !== letra.toLowerCase());

    const minusculas = letras.filter(letra => letra === letra.toLowerCase() && letra !== letra.toUpperCase());

    console.log('\nLetras mayúsculas:', mayusculas.length);
    console.log('Letras minúsculas:', minusculas.length);
}


// FUNCION 1: Mostramos pedimos un texto 
function pedirTexto(texto){
    console.log('\n=== Ingresa un texto ===');
    rl.question('Texto: ',manejarPalabra);
}


pedirTexto();

