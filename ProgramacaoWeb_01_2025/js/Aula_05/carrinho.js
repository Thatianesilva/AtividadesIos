let carro = true
let chave = true
let carteira = true

if (carro && chave && !cnh){
    console.log("dirigir");
}

if (carro || chave){
    console.log("Num fununciou")
} else{
    console.log ("Funfo yipe!")
}

// || Só marca como correto quando tem ao menos UMA variável verdadeira, se todas forem falsas ela não dará como correto, comparando as 3 variáveis
// O operador || é um substituto da palavra "OU", "Or" em gringo

// && retorna com verdadeiro se todos forem verdadeiros, caso todos sejam verdadeiros o comando dará como correto

// ! coloca como Exceção alguma das variávei