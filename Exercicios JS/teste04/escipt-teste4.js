function calcule() {
    let resto = document.getElementById('res')
    
    console.log('br')
    
    let n = 1
    while (n <= 20)   { 
     
        if (n % 2 == 0) { 
            resto.innerHTML += `<mark> ${n} </mark> &#x1F4CC; `
        } else {
            resto.innerHTML += `${n} &#x1F4CC;`    
        }
        n++
    }

    resto.innerHTML += `&#x270F;`
    
    
} 
