// ----------------------------------------------------------------
/*
let contador = 0

while (contador <= 10) {
 console.log(contador);
    
}
*/
// -----------------------------------------------------------------------------
/*<script>
 let idade;

 do {
    idade = Number(prompt('Insira tua idade'))
    if (idade <= 0) {
        alert('Insira uma idade válida')
    }
 } while (idade <= 0);
 
 alert('idade inserida válida:' + idade)



</script>
*/
// ----------------------------------------------------------------
/*
let tabuada = 7

for(i = 0; i <= 10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada*i}`);
}
*/
// ------------------------------------------------------------------------------------

let jojo1 = 0, jojo2 = 1, contador = 0;
let Gyro = [jojo1, jojo2];

while (contador < 0) {
    let próximo = jojo1 + jojo2;
    Gyro.push(próximo)
    jojo1 = jojo2;
    jojo2 = próximo;
   contador++
}

console.log(Gyro)

// -----------------------------------------------------------------------------------------
/*
for(let primo = 2; primo <=  20; primo++){
  let NumeroPrimo = true
  for(i = 2; i < primo; i++){
    if (primo % i === 0) {
        NumeroPrimo = false;
        break;
        
    }
  }
  if (NumeroPrimo) {
    console.log(primo)
  }
}
*/