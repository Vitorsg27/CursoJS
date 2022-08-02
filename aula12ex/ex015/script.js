function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //Criaça 
                img.setAttribute('src', 'criacamasc.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmasc.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomasc.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosomasc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //Criaça
                img.setAttribute('src', 'criacafem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemfem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultofem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosafem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}