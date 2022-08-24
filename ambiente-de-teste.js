let str = 'Hello' //aqui definimos uma string a qual vamos inverter
// fazendo so str.reverse() não é possível obter o resultado que queremos pois o js não vai entender que queremos inverter a sequencia das letras ja que ele ve toda a string como algo so
const revStr = str.split('').reverse().join('') //seguindo esse pensamento usamos o metodo .split(), dessa forma iremos dividir todos os caracteres da nossa string por aspas simples ('') dentro de um array => ['H','e','l','l','o']
//depois usamos o metodo .reverse() e invertemos a sequencia dos itens do array de caracter => ['o','l','l','e','H']
//e em seguida juntamos todos os itens em uma so string => 'olleH'

console.log(revStr)