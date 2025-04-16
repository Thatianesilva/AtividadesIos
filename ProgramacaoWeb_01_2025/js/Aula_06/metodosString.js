let nome = 'Miguél da Silva'

console.log(nome[1]);
console.log(nome.charAt(0)); // CharAt acessa o caracter aonde você indica a posição do índice do array/string, CharAt retornará como vazio

console.log(nome.length); // Length indicara quantos caracteres possui em sua string

console.log(nome.toLowerCase()); // Transforma tudo em minúcuslo
console.log(nome.toUpperCase()); // Transforma tudo em maiúsculo

console.log(nome.substring(0,4)) // O primeiro número indica onde começa o corte e o segundo número indica onde termina

console.log(nome.split(''));

let batata = 'batata'

console.log(batata.split('batata')); // O split corta tudo oque você especificar e separa o restante em strings separadas

let meuNome = 'Enzo Belizardo'

console.log(meuNome.replace('Enzo Belizardo', 'Belizardo Enzo'))
