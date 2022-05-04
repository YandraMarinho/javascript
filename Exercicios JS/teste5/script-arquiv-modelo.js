function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let intervalo = document.getElementById('txtinter')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        window.alert('ERRO')
       
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let t = Number(intervalo.value)

        if (intervalo <= 0) {
            window.alert = ('ERRO, intervalo será considerado como 1')
            t = 1
        }

        if (i < f) { 
            res.innerHTML = ''
            for(let a = i; a < f; a+= t) {
                res.innerHTML += `${a} \u{1F4CC}`
            }
        } else {  
            res.innerHTML = ''
            for (let a = i; a >= f; a -= t ) {
                res.innerHTML += `${a} \u{1F4CC}`
            }
        } 
    }
}