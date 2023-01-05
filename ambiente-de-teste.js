//* Pensando no caso de eu ter um array que repete itens
const meuArray = ['item1', 'item1', 'item3']

//? Qual seria a maneira mais fácil e rápida de criar um novo array somente com os itens únicos (que só aparecem uma vez)?
//* Antes eu pensava que isso talvez pudesse ser resolvido com um map passando por todos os itens dos arrays e os comparando uns com os outros mas a solução nunca foi tão fácil

const arrayComItensUnicos = new Set(meuArray)
console.log([...arrayComItensUnicos])