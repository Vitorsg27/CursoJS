function contar() {
    let i = Number((document.getElementById('txti')).value)
    let f = Number((document.getElementById('txtf')).value)
    let p = Number((document.getElementById('txtp')).value)
    //var res = document.getElementById('res')
    //res.innerHTML = `${i}`

    if (i == 0 && f == 0) {
        res.innerHTML = 'Faltam dados'
        window.alert('Erro! Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        if (p <= 0) {
            window.alert('Passo invalido! Considerando como 1')
            p = 1
        }
        if (i < f) {
            for (let index = i; index <= f; index += p) {
                res.innerHTML += `${index} `
            }
        } else {
            for (let index = i; index >= f; index -= p) {
                res.innerHTML += `${index} `
            }
        }
    }
}