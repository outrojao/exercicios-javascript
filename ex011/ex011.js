var idade = 30
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota')
} else if (idade >= 16 && idade < 18 || idade > 65){
        console.log('Voto opcional')
} else{
    console.log('Voto obrigatorio')
}

// caso seja menor de 16 anos não ira votar, caso tenha entre 16 e 17 anos ou tenha mais de 65 anos o voto é opcional, se for maior de 18 o voto é obrigatorio