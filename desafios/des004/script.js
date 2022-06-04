function tabuada(){
    let num = document.getElementById('txtn') //armazena o valor da caixa de texto
    let tab = document.getElementById('seltab') //da a let tab a função de representante da tag select em html no js
    let msg = document.getElementById('msg') //armazena a texto principal (h1) no codigo para que possa ser feitas alterações

    if( num.value.length ==0 ){ // caso a caixa de texto esteja vazia o usuario será notificado
        msg.innerHTML = 'Digite um número >:(' // muda o conteudo do h1
    } else { // caso a caixa de texto tenha um núemro a seguinte executação será feita
        msg.innerHTML = 'Tabuada' // retorna ao h1 seu valor inical
        let n = Number(num.value) // converta o valor do num que é string para number para que os calculos possam ser realizados
        let c = 1 // define o contador como 1 para que possa ser aumentado gradativamente
        tab.innerHTML = '' // apaga o conteudo da section para que não tenha acumulado de informações e não tenha a opção de scroll vertical
        tab.style.display = "block" // mostra a tabela que foi escondida com css

        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }



        // while( c<=10 ){ //enquanto o contador for MENOR OU IGUAL a 10 o loop será feito
        //     let item = document.createElement('option') //cria o elemento option dentro da tag section
        //     item.text = `${n} x ${c} = ${n*c}` // realiza o calculo da tabuada
        //     item.value = `tab${c}` //adiciona os values para as tags options
        //     tab.appendChild(item) //exibe a let item dentro da tabela
        //     c++ //da incremento ao contador para que assim seu valor possa ser mudado de 1 para 2 dps 3 e etc. Realizando a multiplicação com n assim como uma tabuada
        // }
    }
}