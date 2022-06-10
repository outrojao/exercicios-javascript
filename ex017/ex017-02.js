function soma(n1=0, n2=0){ //recebe 2 parâmetros
    return n1 + n2 //retorna o valor da soma de n1 + n2
}

console.log(soma(7, 3)) //define 7 e 3 como parâmetro, ou seja, no console.log irá aparecer a soma de 7 + 3

console.log(soma(7)) //caso seja feito dessa forma o parâmetro n2 não receberá nenhum valor e será dado como undefined, já o parâmetro n1 receberá o valor 7 mas o retorno da operação será NaN (Not a Number) pois o segundo parâmtro está faltando e seria impossível realizar a operação (n1 + n2) sem o segundo parâmetro


//ENTRETANTO caso nós predefinissimos os parâmetros esse problema do NaN não aconteceria, o que foi que eu fiz nos parâmtros da função soma mas se tirar os valores predefinidos vai ter o problema do NaN no return