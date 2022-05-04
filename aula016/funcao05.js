//função recursiva
//o fatorial de 5 é 5 x 4! ou seja, o fatorial de qlqr nº N é: N = N * (N-1)

function fatorial(n) 
{
    if (n == 1) {
        return 1
    } else 
    {
        return n * fatorial(n-1)
         
    }
} 
console.log(fatorial(5))