let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')

let valores = [] //cria um array vazio para armazenar os valores inseridos (PRESTA ATENÇÃO NISSO PQ PELA FALTA DE PRÁTICA VC TEVE DIFICULDADE NISSO SEU OTÁRIO)

function isNumero(n){
    if( Number(n) >= 1 && Number(n) <= 100 ){ //caso o número inserido no input esteja entre 1 e 100 o retunr será true (confirmação) caso não atenda a condição o return será false
        return true
    } else {
        return false
    }
}


function inLista(n, l){
    if( l.indexOf(Number(n)) != -1 ){ //checa se o número inserido está presente na lista (array) utilizando o método indexOf, o -1 significa q o número não está presente na lista
        return true
    } else {
        return false
    }
}

function adicionar(){
    if( isNumero(num.value) && !inLista(num.value, valores) ){ //caso o valor inserido seja um número e não esteja na lista ele será adicionado
        valores.push( Number(num.value) ) //VOCÊ NÃO ESTAVA CONSEGUINDO DAR O PUSH PQ ESQUECEU DE COLOCAR O VALUE DENTRO DE NUMBER, BURRO mas a lógica tava certa
        let item = document.createElement('option') //cria o elemento option que recebera o valor do numero inserido no input
            item.text = `${num.value}`
            lista.appendChild(item)
            res.innerHTML = '' //limpa o resultado bo buton finalizar
    } else {
        alert('Valor inválido ou já está presente na lista')
    }
    num.value = '' //esvazia a caixa de texto independente se o número foi aceito ou não
    num.focus() //dá foco na caixa de texto
}

function finalizar(){
    if(valores.length == 0){ //se o array valores estiver vazio o usuario sera notificado e o processo de finalizar não continuara ate o array valores ter numeros dentro dele
        alert('ta vazio')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } if(valores[pos] < menor) {
                menor = valores[pos]
            }  
        } 

        média = soma / total //calcula a média

        res.innerHTML = ''
        res.innerHTML += `<p>Existem <strong>${total}</strong> itens na tabela</p>`
        res.innerHTML += `<p>O maior número presente é <strong>${maior}</strong> e o menor é <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma de todos os números é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média resultante de todos os valores é <strong>${média}</strong></p>`
    }
}

let btAdicionar = document.querySelector('#btAdicionar')
    btAdicionar.addEventListener('click', adicionar)

let btFinalizar = document.querySelector('#btFinalizar')
    btFinalizar.addEventListener('click', finalizar)