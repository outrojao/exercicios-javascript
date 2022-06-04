function contar(){
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0){
        alert('Insira os números')
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        res.innerHTML = 'Contando: '

       for(c = inicio; c <= fim; c += passo){
           res.innerHTML += `${c} `
       }
    }
        
}