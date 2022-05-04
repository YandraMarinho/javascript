function contar() {

  let botao = document.getElementById('fim')

  /*let b = 10
  while (b >= 1) {
    fim.innerHTML += `${b} &#x1F4CD;`
    b--
  } */

  for(let b = 10; b >=1; b--) {
    if(b % 2 == 0) {
     fim.innerHTML += ` <mark> ${b} </mark> &#x1F4CD;` 
    }
    

  }

}
