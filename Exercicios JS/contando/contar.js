
function contar() {
    let result = document.getElementById('result')
    let num = Number(document.getElementById('num').value)
    result.innerHTML += `<h2> Contando de 0 até ${num} </h2>`
    let i = 0
    while (i <= num) {
       result.innerHTML+= ` ${i}`
        i++ 
    
    }

}