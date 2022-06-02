function contar(){
    let ini = document.getElementById('txti') //coleta o valor do campo inicio
    let fim = document.getElementById('txtf') //coleta o valor do campo fim
    let passo = document.getElementById('txtp') //coleta o valor do campo passo
    let res = document.getElementById('res') //define a variavel res como representante da div res no codigo js

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ // caso os campos dos números estejam vazios o usuario sera notificado do erro e a div mudara seu conteudo atual para o definifo a seguir
        //alert('Insira os números corretamente')
        res.innerHTML = 'Impossível contar!, insira os números corretamente'
    } else { //caso todos os campos estejam preenchidos o contador funcionara normalmente
        res.innerHTML = 'Contando: <br>' //muda o conteudo da div res
        let i = Number(ini.value) //converte o valor do input inicio para number ja que os inputs são strings
        let f = Number(fim.value) //converte o valor do input fim para number ja que os inputs são strings
        let p = Number(passo.value) //converte o valor do input passo para number ja que os inputs são strings

        if(p <= 0){ // se o passo for MENOR OU IGUAL a 0, o valor do passo sera definido como 1 e o usuario sera notificado
            res.innerHTML = 'Passo inválido, passo será considerado como <strong>1</strong> <br>'
            p = 1
        } 

        if(i < f){ // caso o meu i for MENOR que o meu f a contagem crescente é realizada
            for (var c = i; c <= f; c += p){ //contagem crescente
                res.innerHTML += ` ${c} \u{1F449}` //formatação unicode para o java script, so funciona entre ``
            }
        } else { // caso o meu i for MAIOR que o meu f a contagem regressiva é realizada
            for(let c = i; c >= f; c -= p ){ //contagem regressiva
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //apos o loop for finalizado o emoji da bandeira sera inserido
    }
}


// RESSALVAS:
// Tive dificuldade em exibir os numeros das contas, por exemplo caso a conta fosse de 1 a 9 pulando de 2 em 2 o correto a ser exibido seria:
//1 3 5 7 9, entretanto no meu caso aparecia apenas o ultimo numero, no caso o 9, não entendi ainda o que errei no meu codigo e vou tentar achar uma resposta no stackoverflow porem me senti bem frustado e copiei o codigo do video do guanabara, eu entendi a logica do codigo e tudo mais porem me sinto mal por n ter conseguido fazer sozinho e não entendo a diferença desse codigo para o meu original
//Espero melhorar mais e vou me esforçar pra isso :)