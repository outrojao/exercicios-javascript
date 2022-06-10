function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){ //enquanto 3 for maior que 1 ele irá perde 1 (c--)
        fat*=c //fatorial * c, ou seja, fatorial = 1 e c = 3 //// 1 * 3, 3 * 2, 6 * 1
    }
    return fat //retorna o fatorial que no caso agora é 6
}

console.log(fatorial(3))