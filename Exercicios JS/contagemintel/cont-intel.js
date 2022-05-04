

function contar() {
    let saida = document.getElementById('saida')
    let inicio = document.getElementById('inicio')
    let final = document.getElementById('final')
    let ini = Number(inicio.value)
    let fim = Number(final.value)

    saida.innerHTML += `<h2> Contando de ${ini} até ${fim} </h2> `

    if (ini < fim ) {
        for (let c = ini; c <= fim; c++) {
            saida.innerHTML +=  `${c} \u{1F60B} `  
        }
    } else {
        for (let c = ini; c >= fim; c--) {
            saida.innerHTML +=  ` ${c} \u{1F60B} `  
        }
    }
        

}