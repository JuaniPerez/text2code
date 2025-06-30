document.addEventListener('DOMContentLoaded', () => {
  const form  = document.querySelector('#formulario-texto');
  const inputTexto = document.querySelector('#texto');
  const checkboxBinario = document.querySelector('#toBinario');
  const checkboxAscii = document.querySelector('#toAscii');
const resultadoBinario = document.querySelector('#resultado-binario');
const resultadoAscii = document.querySelector('#resultado-ascii');


  if (form && inputTexto && checkboxBinario && checkboxAscii && resultadoBinario && resultadoAscii) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const texto = inputTexto.value.trim();
      console.log('Texto ingresado:', texto);

      checkboxChecked(checkboxAscii, checkboxBinario, texto);
    });

    function checkboxChecked(checkboxAscii, checkboxBinario, texto) {
      if (checkboxBinario.checked) {
        const binarios = codificarABinario(texto);
        resultadoBinario.innerText = binarios.join(' ');
        document.querySelector('#resultado-binario').classList.remove('oculto');
      } 

      if (checkboxAscii.checked) {
        const asciis = codificarAAscii(texto);
        resultadoAscii.innerText = asciis.join(' ');
        document.querySelector('#resultado-ascii').classList.remove('oculto');
      } 
    }

    // Funciones básicas de conversión

    function codificarABinario(texto) {
      return Array.from(texto).map(char => char.charCodeAt(0).toString(2));
    }

    function codificarAAscii(texto) {
      return Array.from(texto).map(char => char.charCodeAt(0));
    }
  } else {
    console.error('Algún elemento del DOM no fue encontrado. Revisa los selectores.');
  }
});
