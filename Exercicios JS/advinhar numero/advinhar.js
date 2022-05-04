
let result = document.getElementById('result')

let n1 = Math.floor(Math.random() * (100 - 0))

function gerar(min, max) {
    let palp = window.prompt('Qual é o seu palpite?')

    if (palp > n1) {
        result.innerHTML += `<p>Você falou ${palp}. Meu número é MENOR!</p>`
    } else if (palp < n1) {
        result.innerHTML += `<p>Você falou ${palp}. Meu número é MAIOR!</p>`
    } else if (palp == n1) {
        result.innerHTML += `<p> Acertou! Você falou ${n1}. Pensei exatamente nesse número!</p>`
    }
}
    

