function gerar() {
    let numero = document.getElementById('txtn')
    let tabuada = document.getElementById('sel')

    if(numero.value.length == 0) {
        window.alert('ERRO, esse campo não pode ficar vazio.')
    } else {
        let n1 = parseInt(numero.value)
        let c = 1

        tabuada.innerHTML = ''

        while (c <= 10) { 
        let item = document.createElement('option')
        item.text = `${n1} x ${c} = ${n1*c}`
        tabuada.appendChild(item)
        c++
        }
    }


    //for (let t = n1; c >= n1; c+= n1++) {}

}