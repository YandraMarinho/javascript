

function fatorar() {
    let saida = document.getElementById('saida')
    let num = document.getElementById('fator')
    let n = Number(num.value)
    
    saida.innerHTML += `<h2> Calculando ${n}! </h2> `
    
    let fat = 1
    let c = n

    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c 
        c--
    } 

    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
        

}