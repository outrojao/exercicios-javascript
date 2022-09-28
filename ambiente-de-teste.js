//tentando resolver uma dúvida que eu vi no twitter, na verdade a pergunta era como fazer isso em TypeScript mas acredito que a transição não seja tão complicada, eu acho...

const lista = [
    {
        nome: 'Maria',
        numeros: [11, 22, 53]
    },
    {
        nome: 'Pedro',
        numeros: [52, 35, 22]
    },
    {
        nome: 'João',
        numeros: [00, 11, 33]
    }
]

const temVinteEDoisIncludes = lista.filter(({numeros}) => numeros.includes(22))
const temVinteEDoisSome = lista.filter(item => item.numeros.some(num => num === 22))

console.log(temVinteEDoisIncludes);
console.log(temVinteEDoisSome);

//A pessoa queria retornar do array lista todos os objetos que tivesem o numero 22 no seu atributo numeros, consegui resolver :)
//inicialmente eu já pensei que o problema poderia ser resolvido com o método .includes(), porém fui ver nos comentários do tweet uma solução com .some() que chegava na mesma resposta e fui pesquisar a diferença dos métodos já que os dois chegavam na mesma resposta

const books = [
    { 
      name: 'Cangaceiro JavaScript',
      author: 'Flávio Almeida',
      isbn: '9788594188014'
    },
    {
      name: 'MEAN', 
      author: 'Flávio Almeida', 
      isbn: '9788555190476'
    }
  ];

const searchBook = { 
    name: 'Cangaceiro JavaScript',
    author: 'Flávio Almeida',
    isbn: '9788594188014'
};

//nesse caso aqui usando .includes() nós não conseguimos solucionar o problema pois o .includes() realiza uma comparação através de === no entanto, comparações com === ou == só funcionam compararando os valores com os tipos: Boolean, Null, Undefined, Number, String, Symbol

if(books.includes(searchBook))
  console.log(`${JSON.stringify(searchBook)} existe!`);

//poderiamos fazer a comparação com o .includes() dessa forma também já que ele faz comparação com os tipos primitivos:
/*
if(JSON.stringify(books).includes(JSON.stringify(searchBook)))
console.log(`${JSON.stringify(searchBook)} existe!`);
*/

//para fazer uma comparação de objeto podemos comparar algum de seus atributos como:
//if(books.some(book => book.isbn == searchBook.isbn)) -- onde comparamos a isbn do livro

//porém uma maneira mais rápida e simples de comparar o objeto por completo seria fazer dessa forma:
const bookAsJSON = JSON.stringify(searchBook);

//Com o JSON.stringify convertemos um objeto JavaScript em um JSON que é a representação textual de um objeto. Sendo uma representação através de uma string, podemos utilizar === ou == que a comparação utilizará seu valor.

if(books.some(book => JSON.stringify(book) == bookAsJSON))
  console.log(`${bookAsJSON} existe!`);