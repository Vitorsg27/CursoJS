let tam = 10
let maxNum = 10
let num = []
let busca = 5
for (let i = 0; i < tam; i++) {
    num.push(Math.floor(Math.random() * maxNum));
}
num.sort()

for (let c in num) {
    console.log(`Vet${c} ${num[c]}`);
}

let search = num.indexOf(busca)

if (search == -1) {
    console.log('Valor não encontrado');
} else {
    console.log(`Valor ${busca} encontrado na posição ${search}`);
}