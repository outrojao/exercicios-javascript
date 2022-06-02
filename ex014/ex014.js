// Os três códigos fazem a mesma coisa porém o código usando while faz de maneira mais fácil e inteligente, pois se trata de uma ação repetitiva e inserir cada passo individualmente seria muito tedioso e trabalhoso sem necessidade,o código usando do while faz a mesma coisa que o código que apenas usa while porém, o teste lógico nesse código vem no final


// OTIMA OPÇÃO
// enquanto c for menor e diferente que 6 execute o bloco
// var c = 1
// while (c <= 6) {
//     console.log(`Passo: ${c}`)
//     c++ // c = c + 1
// }


// PICA E FOFO
// execute o bloco enquanto c for menor e diferente de 6
// var c = 1
// do {
//     console.log(`Passo: ${c}`)
//     c++ // c = c + 1
// } while (c <= 6)


// FEIO PODRE ASQUEROSO
// console.log('Passo: 1')
// console.log('Passo: 2')
// console.log('Passo: 3')
// console.log('Passo: 4')
// console.log('Passo: 5')
// console.log('Passo: 6')

// var c = 0
// do {
//     console.log(`${c}`)
//     c++
// } while (c != 6)

    var n = 0
    for ( var i = 0; i < 5; i++ ) { 
        console.log( i );
    }