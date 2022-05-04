function calcular() {
    let resp = document.getElementById('resp')

    let n1 = Number(window.prompt('Digite um número'))
    let n2 = Number(window.prompt('Digite outro número'))
    let oper = window.prompt(`Os números escolhidos foram: ${n1} e ${n2}
    Qual operação você gostaria de realizar?
    [1] Adição
    [2] Subtração
    [3] Multiplicação
    [4] Divisão`)

    let s = (n1 + n2)
    let b = (n1 - n2)
    let m = (n1 * n2)
    let d = (n1 / n2)


    if(oper == 1) {
        resp.innerHTML = ` A soma entre ${n1} e ${n2} é: ${s}`
    } else if (oper == 2) {
        resp.innerHTML = `A subtração entre ${n1} e ${n2} é: ${b}`
    } else if (oper == 3) {
        resp.innerHTML = `A multiplicação entre ${n1} e ${n2} é: ${m}`
    } else if ( oper = 4) {
        resp.innerHTML = `A divisão entre ${n1} e ${n2} é: ${d}`
    } else {
        resp.innerHTML = `Digite um valor entre 1 e 4`
    }



    
    

    

}
