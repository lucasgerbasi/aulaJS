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

Ex1()

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

Ex2()

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

Ex3()

// Faça um programa que receba as notas de 15 alunos em cinco provas diferentes e armazene-as em uma matriz 15x5
// os nomes dos alunos e armazene-os em um vetor de 15 posições
// o programa deve calcular e mostrar para cada aluno, o nome, a média aritmética das cinco provas e a situação (aprovado, reprovado ou exame), e a média da classe
function Ex4() {
    let matrizNotas = []
    let nomes = []
    let soma = 0

    for (let i = 0; i < 15; i++) {
        nomes[i] = prompt("Insira o nome do aluno: ")
        matrizNotas[i] = []

        for (let j = 0; j < 5; j++) {
            matrizNotas[i][j] = Number(prompt(`Insira a nota do aluno ${nomes[i]} na prova ${j + 1}: `))
            soma = soma + matrizNotas[i][j]
        }
    }

    let mediaClasse = 0

    for (let i = 0; i < 15; i++) {
        let somaAluno = 0
        let numNotasValidas = 0

        for (let j = 0; j < 5; j++) {
                somaAluno += matrizNotas[i][j]
                numNotasValidas++;
        }

        let mediaAluno = somaAluno / numNotasValidas;
        let situacao = mediaAluno >= 6 ? "Aprovado" : "Reprovado"

            console.log(`Aluno: ${nomes[i]}`)
            console.log(`Média: ${mediaAluno}`)
            console.log(`Situação: ${situacao}`)
    }
    mediaClasse = soma/75
    console.log(`Média da classe: ${mediaClasse}`)
}

Ex4()

function Ex5() {
    let matrizVendas = []
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let totalVendido = 0
    let totalVendidoSemana = [0, 0, 0, 0]

    for (let i = 0; i < 12; i++) {
        let vendas = []
        let totalVendidoMes = 0

        for (let j = 0; j < 4; j++) {
            // fill the matrix with random values
            vendas[j] = Math.floor(Math.random() * 2000)
            totalVendido += vendas[j]
            totalVendidoMes += vendas[j]
        }

        matrizVendas[i] = vendas

        console.log(`Total vendido em ${meses[i]}: R$ ${totalVendidoMes.toFixed(2)}`)
    }

    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 4; j++) {
            totalVendidoSemana[j] += matrizVendas[i][j]
        }
    }

    console.log("Total vendido em cada semana durante o ano:")
    for (let j = 0; j < 4; j++) {
        console.log(`Semana ${j + 1}: R$ ${totalVendidoSemana[j].toFixed(2)}`)
    }

    console.log(`Total vendido pela loja no ano: R$ ${totalVendido.toFixed(2)}`)
    console.log(matrizVendas)
}

Ex5()
