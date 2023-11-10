// Faça um programa que preenchauma matriz 3x3 com números inteiros, e some cada uma das
// colunas, armazenando o resultado da soma em um vetor. A seguir, o programa deverá
// multiplicar cada elemento ad matriz pela soma da coluna e mostrar a matriz resultante.

function somarColunas() {
    let colunas = []
    let mat = []

    for (let i = 0; i < 3; i++) {
        mat.push([])
    }

    for (let i = 0; i < 3; i++) {
        let somaColunas = 0
        for (let j = 0; j < 3; j++) {
            mat[i][j] = Number(prompt("Digite um número: "))
            somaColunas += Number(mat[i][j])
        }
        colunas.push(somaColunas);
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            mat[i][j] *= colunas[j]
        }
    }

    console.log("Matriz: ", mat)
}

somarColunas()

// Elabora um programa que preenchauma matriz M de ordem 4x6 e uma segunda matriz
// N de ordem 6x4, calcule e imprima a soma das linhas de M com as colunas de N.

function somaEntreMatrizes() {
    let M = []
    let N = []
    let i = 0
    let j = 0
    let somaLinhas = 0
    let somaColunas = 0
    let somaTotal = 0

    for (i = 0; i < 3; i++) {
        M.push([])
    }

    for (i = 0; i < 3; i++) {
        N.push([])
    }

    somaLinhas = 0
    somaColunas = 0

    for (i = 0; i < 3; i++) {
        somaLinhas += M[i][j]
        for(j = 0; j < 3; j++) {
            M[i][j] = Number(prompt("Digite um número: "))
        }
    }
    
    for (i = 0; i < 3; i++) {
        for(j = 0; j < 3; j++) {
            N[i][j] = Number(prompt("Digite um número: "))
            somaColunas = N[i][j]
        }
    }

    somaTotal = somaLinhas + somaColunas

    console.log("Matriz M: ", M)
    console.log("Matriz N: ", N)
    console.log("Soma total: ", somaTotal)
}

somaEntreMatrizes()

// Crie um programa que preencha duas matrizes 3x3 com números inteiros, calcule e mostre:
// a soma das duas matrizes, resultando em uma terceira matriz também de ordem 3x3
// a diferença das duas matrizes, resultando em uma quarta matriz de ordem 3x8

function Ex8() {
    let mat1 = []
    let mat2 = []
    let mat3 = []
    let mat4 = []

    for (let i = 0; i < 3; i++) {
        mat1.push([])
        mat2.push([])
        mat3.push([])
        mat4.push([])
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            mat1[i][j] = Number(prompt("Digite um número: "))
            mat2[i][j] = Number(prompt("Digite um número: "))
        }
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            mat3[i][j] = mat1[i][j] + mat2[i][j]
            mat4[i][j] = mat1[i][j] - mat2[i][j]
        }
    }

    console.log("Matriz 1: ", mat1)
    console.log("Matriz 2: ", mat2)
    console.log("Matriz 3: ", mat3)
    console.log("Matriz 4: ", mat4)
}

Ex8()

// Faça um programa que preencha uma matriz 3x3 com números reais e outro valor númerico digitado pelo usuário.
// O programa deverá calcular e mostrar a matriz resultante da multiplicação do número digitado por cada elemento da matriz.

function ex9() {
    let mat = []
    let matResultante = []

    for (let i = 0; i < 3; i++) {
        mat.push([])
        matResultante.push([])
    }

    num = Number(prompt("Digite um número: "))

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            mat[i][j] = Number(prompt("Digite um número: "))
            matResultante[i][j] = mat[i][j] * num
        }
    }

    console.log("Matriz: ", mat)
    console.log("Matriz resultante: ", matResultante)
}

ex9()

// Crie um programa que preencha uma matrix 5x5 com números inteiros, calcule e mostre a soma:
// dos elementos da linha 4.
// dos elementos da coluna 2.
//  dos elementos da diagonal principal.
// dos elementos da diagonal secundária.
// de todos os elementos da matriz.

function ex10() {
    let mat = []
    let somaLinha4 = 0
    let somaColuna2 = 0
    let somaDiagonalPrincipal = 0
    let somaDiagonalSecundária = 0

    for (let i = 0; i < 5; i++) {
        mat.push([])
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            mat[i][j] = Number(prompt("Digite um número: "))
            if (i == 3) {
                somaLinha4 += mat[i][j]
            }
            if (j == 2) {
                somaColuna2 += mat[i][j]
            }
            if (i == j) {
                somaDiagonalPrincipal += mat[i][j]
            }
            if (i + j) {
                somaDiagonalSecundária += mat[i][j]
            }
        }
    }

    console.log("Matriz: ", mat)
    console.log("Soma da linha 4: ", somaLinha4)
    console.log("Soma da coluna 2: ", somaColuna2)
    console.log("Soma da diagonal principal: ", somaDiagonalPrincipal)
    console.log("Soma da diagonal secundária: ", somaDiagonalSecundária)
}

ex10()