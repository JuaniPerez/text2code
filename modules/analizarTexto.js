function analizarTexto(texto) {
  const letras = Array.from(texto);
  const mayusculas = letras.filter(l => l === l.toUpperCase() && l !== l.toLowerCase());
  const minusculas = letras.filter(l => l === l.toLowerCase() && l !== l.toUpperCase());

  return {
    caracteres: letras,
    mayusculas: mayusculas.length,
    minusculas: minusculas.length,
    arrMayusculas: mayusculas,
    arrMinusculas: minusculas
  };
}

module.exports = { analizarTexto };
