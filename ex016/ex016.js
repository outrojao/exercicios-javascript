let num = [5, 8, 2, 9, 3]

num.push(7) //adiciona o valor 7 ao fim do array
console.log(num)
console.log(num.sort()) //organiza o array em forma crescente, NÃO PRECISA TA DENTRO DO CONSOLE.LOG, só usei pra exibir mesmo mas podia ter inserido antes e mostrar em forma crescente dps
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O número no primeiro elemento do array é ${num[0]}`)
num.push(4) //n fica organizado em ordem crescente pq foi adicionado dps do comando

for(var pos = 0; pos < num.length; pos++){ //fiz antes do video ta? pai ta quente e fiz certo ainda
    console.log(` Elemento ${pos} = ${num[pos]}`)
}
console.log('///////////////////////////////////////////////')
for(var pos in num){ //faz a mesma coisa q o anterior porém de uma forma mais simples e otimizada para variáveis compostas (arrays), para cada posição dentro de num, mostrar num[pos]
    console.log(` Elemento ${pos} = ${num[pos]}`)
}

console.log('///////////////////////////////////////////////')
if (num.indexOf(7) == -1){ //caso o valor do indexOf seja -1 ele será dado como não encontrado, pq não foi mesmo nem tem elemento -1 é o jeito do array dizer que esse elemento não existe
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 7 está no elemento ${num.indexOf(7)}`) //mostra em que elemento está o valor 7
}