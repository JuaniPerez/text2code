// ================= MODULOS =====================

const readline = require('readline');
const { analizarTexto } = require('./analizarTexto');
const { codificarTexto } = require('./codificarTexto');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// ================= FUNCIONES =====================

function preguntarVolverOMenu() {
  rl.question('\n\n\t\t\t\t¿Querés volver al menú? (s/n): ', (respuesta) => {
    if (respuesta.toLowerCase() === 's') {
      mostrarMenu();
    } else {
       console.clear();
            console.log('\t\t\t\t ---------------------------\t\t\t\t')
            console.log('\t\t\t\t|   NOS VEMOS LA PROXIMA!  🤘 |\t\t\t\t')
            console.log('\t\t\t\t ---------------------------\t\t\t\t')
      rl.close();
    }
  });
}

function centrarVertical(cantLineas = 10) {
    console.log('\n'.repeat(cantLineas));
}


function mostrarMenu (){
    console.clear();
    centrarVertical(2);
    console.log('\n\n\t\t\t=== MENÚ ===');
    console.log('\n\n\t\t\t1. Analizar texto');
    console.log('\n\n\t\t\t2. Codificar texto');
    console.log('\n\n\t\t\t0. Salir');
    rl.question('\n\t\t\tElegí una opción: ', manejarOpcion);
} 




function manejarOpcion(opcion){
    switch (opcion){
        case '1':
            console.clear();
            rl.question('\n\n\t\t\t\tIngresa un texto: ',(texto) =>{

                const resultado = analizarTexto(texto);
                
                console.log('\n\n\t\t\t\tArray de caracteres:',resultado.caracteres);
                console.log('\n\n\t\t\t\tCantidad de mayúsculas:', resultado.mayusculas);
                console.log('\n\n\t\t\t\tCantidad de minúsculas:', resultado.minusculas);
                console.log('\n\n\t\t\t\tCantidad de mayúscula:', resultado.arrMayusculas);
                console.log('\n\n\t\t\t\tCantidad de minúsculas:', resultado.arrMinusculas);
                
                preguntarVolverOMenu()
            })
            break;
        case '2':
                console.clear();

                centrarVertical(2);
                
                rl.question('\t\t\t\t Texto a codificar en binario: ',(texto) =>{
                    
                const binario = codificarTexto(texto);

                const binariosFormateados = binario.map((b, i) => {
                return ((i + 1) % 8 === 0) ? b + '\n\t\t\t\t' : b;
                }).join(' ');

                

                console.log('\n\t\t\t\t═══════════════════════════════════════════════════════')
                console.log('\n\t\t\t\t Texto codificado en binario:')
                console.log('\n\t\t\t\t───────────────────────────────────────────────────────')
                console.log(`\n\t\t\t\t${binariosFormateados}`);
                console.log('\n\t\t\t\t═══════════════════════════════════════════════════════')

                preguntarVolverOMenu()
            })
            break;
        case '0':
            console.clear();
            centrarVertical(1);
            console.log('\n\t\t\t\t ---------------------------')
            console.log('\n\t\t\t\t|   GRACIAS POR PASAR!  🤘 |')
            console.log('\n\t\t\t\t ---------------------------\n\n\n\n\n')
            rl.close();
            break;
        default:
            console.clear();
            console.log('\n\n\t\t\t\tOpcion invalida.')
            mostrarMenu();
            
    }
}

// ================= EXPORTACION =====================

module.exports = { mostrarMenu }