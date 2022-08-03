function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let rand = (Math.floor(Math.random() * 10))
console.log(rand, parimpar(rand));