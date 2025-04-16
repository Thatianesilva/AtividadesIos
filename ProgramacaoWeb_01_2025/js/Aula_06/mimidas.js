let mimidas = ['pizza', 'queijo', 'frango', 'abacaxi', 'brócolis']
//sabore de cumida
console.log (mimidas);
console.log (mimidas.length);

mimidas.push('Carne de Boi');
// coloca-se outra coisa dentro da lista

let mortedoX = mimidas.pop
// Criou-se um novo array armazenando o item que foi colocado na lista logo acima, .pop retira o ÚLTIMO código

let mortedoXX = mimidas.splice(1, 2)
// Splice recebe dois valores separados por vírgula, o primeiro valor indica onde será o corte e o segundo valor o indica qual o seu tamanho

console.log('Caixa de armazenamento: do excluído: ' + mortedoX);
console.log(' Caixa de armazenamento do código origem: '+ mimidas);




//array = "let **nome** = []" criando uma string
// console.log para resultado