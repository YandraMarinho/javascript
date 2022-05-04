let valores = [4, 8, 5, 9, 2, 3,7,6]
//valores.sort()
//console.log(valores)


/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(` a posição ${pos}  tem o valor ${valores[pos]}`) // forma tradicional de usar 'for' em arrays
}*/

let pos = 0
for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)   // forma otimizada de 'for' para arrays
}

let descobrir = valores.indexOf(2)   // comando para descobrir a posição de um valor dentro da array
console.log(`o valor 2 se encontra na porição ${descobrir}`)