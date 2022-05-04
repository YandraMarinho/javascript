function contar() {

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    //let contador = document.getElementById('cont')
    let res = document.getElementById('res')

    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Número inválido')
    } else {
        res.innerHTML = 'contando: '
        let i = parseInt(inicio.value)
        let f = parseInt(fim.value)
        let p = parseInt(passo.value)
        
        if(passo <= 0) {
            res.innerHTML = 'ERRO'
            p=1
        }

        if (i < f)
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F4CC}` 
        } else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F4CC}`
            }

        }


    }

} 










