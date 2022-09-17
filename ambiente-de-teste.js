const numeros = [1, 2, 3, 4, 5]
const numerosVezesDois = numeros.map(numero => numero * 2)
const numerosPares = numeros.filter(numero => numero % 2 === 0)
const encontrarUm = numeros.find(numero => numero === 1)
const encontrarPosicao = numeros.findIndex(numero => numero === 1)
const temImpar = numeros.some(numero => numero % 2 !== 0)
const todosPar = numeros.every(numero => numero % 2 === 0)
const depoisDeUmSoBruh = numeros.fill('bruh', 1)

const manipulandoArrays = [
    numerosVezesDois,
    numerosPares,
    encontrarUm,
    encontrarPosicao,
    temImpar,
    todosPar,
    depoisDeUmSoBruh
]

manipulandoArrays.forEach(arrayManipulado => console.log(arrayManipulado))