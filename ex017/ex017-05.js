//RECURSIVIDADE
function fatorial(n){
    if ( n ==1 ){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(6))

/*

6! = 6 * 5 * 4 * 3 * 2 * 1
6! = 6 * 5!

n! = n * (n-1)!
1! = 1

*/