let result = document.getElementById('result')


function gerar(min, max) {
    let n1 = Math.floor(Math.random() * (100 - 0))
    result.innerHTML = `Acebei de pensar no número <mark>${n1}</mark> !` 
}

function limpar() {
result.innerHTML = null
}