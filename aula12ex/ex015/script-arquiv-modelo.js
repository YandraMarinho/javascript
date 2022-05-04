
function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
            window.alert('[E] Verifique os dados e tente novamente!')
    } else { 
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if ( fsex[0].checked) { 
            genero = 'Homem'
            if (idade >=0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagem-idade.jpg')
            } else if (idade >= 11 && idade <20) {
                //adolescente
                img.setAttribute('src', 'imagem-idade.jpg')
            } else if (idade >= 20 && idade < 50) {
                //adulto
                img.setAttribute('src', 'imagem-idade.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem-idade.jpg')
            } 
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 11) {
                //criança
                img.setAttribute('src', 'imagem-idade.jpg')
            } else if (idade >= 11 && idade <20) {
                //adolescente
                img.setAttribute('src', 'imagem-idade.jpg')
            } else if (idade >= 20 && idade < 50) {
                 //adulto
                 img.setAttribute('src', 'imagem-idade.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem-idade.jpg')
            } 
        }
        res.innerHTML =`Detectamos:  ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    
    } 
}