var horaAtual = new Date()
var hora = horaAtual.getHours()
var fundo = window.document.body

if (horaAtual < 12){
    fundo.style.background = 'yellow'
}