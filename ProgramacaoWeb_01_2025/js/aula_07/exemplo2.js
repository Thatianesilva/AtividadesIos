// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.) e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7),  uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.


let Semana = 0

switch (Semana) {
    case 1: 
        console.log('Domingo')

        break;

    case 2:
        console.log('Segunda-Feira')

        break;

    case 3:
        console.log('Terça-feira')

        break;
        
    case 4:
        console.log('Quarta-Feira')

        break;

    case 5:
        console.log('Quinta-Feira')

        break;

    case 6:
        console.log('Sexta-Feira')
    
    case 7:

        console.log('Sábado')
        break;

    default:
        console.log('Digite um número de 1 a 7 porfavor')
        
        
        break;
}

else{

    


}