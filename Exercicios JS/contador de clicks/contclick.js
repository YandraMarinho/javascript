let contador = 0
let resultado = document.querySelector('section#resultado')

function contar() {
    contador ++
    resultado.innerHTML = `${contador}` 
}

function zerar() {
    resultado.innerHTML = null
}