function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var formAno = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')

   if (formAno.value.length == 0 || formAno.value > ano){
       alert('[!ERRO] Verifque os dados novamente')
   } else {
       var formSex = document.getElementsByName('radsex')
       var idade = ano - Number(formAno.value)
       var gênero = ''
       var img = document.createElement('img') //criou uma tag img no codigo
       img.setAttribute('id', 'foto') // colocou na tag img criado anteriormente o id 'foto'
       if (formSex[0].checked){
           gênero = 'Homem'
           if (idade >= 0 && idade <= 10){
               //CRIANÇA
               img.setAttribute('src', 'imagens/bebe-homem.png')
           } else if (idade > 10 && idade <= 21){
               //JOVEM
               img.setAttribute('src', 'imagens/jovem-homem.png')
           } else if (idade > 21 && idade <= 50){
               //ADULTO
               img.setAttribute('src', 'imagens/adulto-homem.png')
           } else {
               //IDOSO
               img.setAttribute('src', 'imagens/idoso-homem.png')
           }
       } else if (formSex[1].checked){
           gênero = 'Mulher'
           if (idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebe-mulher.png')
            } else if (idade > 10 && idade <= 21){
                //JOVEM
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade > 21 && idade <= 50){
                //ADULTA
                img.setAttribute('src', 'imagens/adulta-mulher.png')
            } else {
                //IDOSA
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${gênero} de ${idade} anos de idade`
       res.appendChild(img) //adicionar um elemento, q no caso é o img
   }
}