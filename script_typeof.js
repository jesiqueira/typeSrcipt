"use strict";
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('EdMar'));
const frase = 'Front End';
const preco = 500;
const cond = preco > 100;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof {});
console.log(typeof null);
if (typeof frase === 'string') {
    console.log('Frase é uma string');
}
else {
    console.log('Frase não é uma string');
}
