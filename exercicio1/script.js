/*Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3
Faça isso: Utilizando ifs aninhados */

let numero = prompt("Digite um numero:")

if (numero % 2 === 0) {
    console.log(`${numero} é divisivel por 2`)
    if (numero % 3 === 0) {
        console.log(`${numero} é divisivel por 2 e por 3`)
    }
} else if(numero % 3 === 0){
    console.log(`${numero} é divisivel por 3`)
} else {
    console.log(`Numero primo`)
}

// Utilizando um operador lógico para unir duas operações relacionais

if (numero % 2 === 0 || numero % 3 === 0) {
    console.log(`${numero} é divisivel por 2 ou por 3`)
} else {
    console.log(`Numero primo`)
}
