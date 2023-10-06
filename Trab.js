function Ex1() {
    let mat = []
    let cont = 0
    for (i = 0; i < 3; i++) {
        mat[i] = []
        for (j = 0; j < 5; j++) {
            a = parseInt(prompt("Insira um número: "))
            mat[i][j] = a
            if (mat[i][j] >= 15 && mat[i][j] <= 20) {
                cont += 1
            }
        }
    }
    console.log("Quantidade de elementos entre 15 e 20: " + cont)
}

function Ex2() {
    let mat = []
    let cont = 0
    let soma = 0
    let cont12e20 = 0
    for (i = 0; i < 2; i++) {
        mat[i] = []
        for (j = 0; j < 4; j++) {
            a = parseInt(prompt("Insira um número: "))
            mat[i][j] = a
            cont += 1
            if (a % 2 == 0) {
                soma += a
            }
            if (mat[i][j] >= 12 && mat[i][j] <= 20) {
                cont12e20 += 1
            }
        }
    }
    media = soma / cont
    console.log("Quantidade de elementos entre 12 e 20: " + cont12e20)
    console.log("Media dos elementos pares: " + media)
}

function Ex3() {
    let mat = []
    let maiorNum = 0
    let menorNum = 0
    for (i = 0; i < 6; i++) {
        mat[i] = []
        for (j = 0; j < 3; j++) {
            let a = parseInt(prompt("Insira um número: "))
            mat[i][j] = a
            if (a > maiorNum) {
                maiorNum = a
            }
            if (a < menorNum) {
                menorNum = a
            }
        }
    }
    let maiorNumPos = []
    let menorNumPos = []
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 3; j++) {
            if (mat[i][j] === maiorNum) {
                maiorNumPos.push(`[${i}, ${j}]`)
            }
            if (mat[i][j] === menorNum) {
                menorNumPos.push(`[${i}, ${j}]`)
            }
        }
    }
    console.log("Maior elemento: " + maiorNum + " nas posições: " + maiorNumPos.join(", "))
    console.log("Menor elemento: " + menorNum + " nas posições: " + menorNumPos.join(", "))
}