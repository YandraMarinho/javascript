function inform() {
    let month = window.prompt('Write the Mounth According the Model. E.g: September')
    let season = document.getElementById('season')
    if ( month == 'March' || month == 'April' || month == 'May' || month == 'June') {
        season.innerHTML= `In ${month} the Season is <mark> AUTUMN </mark>`
    } else if (month == 'June' || month == 'July' || month == 'August' || month == 'September' ) {
        season.innerHTML= ` In ${month} the Season is <mark> WINTER </mark>`
    } else if (month == 'September' || month == 'October' || month == 'November' || month == 'December' ) {
        season.innerHTML= ` In ${month} the Season is <mark> SPRING </mark>`
    } else if(month == '' ) {
        window.alert('ERROR, write a valid mounth')
    }else {
        season.innerHTML= ` In ${month} the Season is <mark> SUMMER </mark>`
    }

}