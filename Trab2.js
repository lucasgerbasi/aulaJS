// Exercício 1

function comprimentoString(str) {
    let i = 0
    while (str[i] !== undefined) {
        i++
    }
    console.log("Comprimento: " + i)
}

// comprimentoString("teste")

// Exercício 2
function LerNomes(str) {
    if (str[0] == "a" || str[0] == "A") {
        console.log("Nome: " + str)
    }
}

// LerNomes("joao")

// Exercício 3

function Imprima4LetrasNome(str) {
    let i = 0
    for (i = 0; i < 4; i++) {
        console.log(str[i])
    }
}

// Imprima4LetrasNome("Roberto")

// Exercício 4
function QuantasLetrasNome(str) {
    console.log("Quantidade de letras: " + str.length)
}

// QuantasLetrasNome("Roberto")

// Exercício 5
function AceitaNaoAceita(nome, sexo, idade) {
    if (sexo == "F") {
        if (idade < 25) {
            console.log(nome, "ACEITA")
        }
        else {
            console.log("NAO ACEITA")
        }
    }
    else {
        console.log("NAO ACEITA")
    }
}

// AceitaNaoAceita("Ana", "F", 20)

// Exercício 6
function CompararStrings(str, str2) {
    if (str == str2) {
        console.log("IGUAIS")
    }
    else {
        console.log("DIFERENTES")
    }
}

// CompararStrings("teste", "teste")

// Exercício 7
function ContNum1emString(str) {
    let i = 0
    let cont = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == "1") {
            cont++
        }
    }
    console.log("Quantidade de números 1 na string: ", cont)
}

// ContNum1emString("01000100110010")

// Exercício 8
function Substituir0por1(str) {
    let novaStr = str.replace(/0/g, "1")
    console.log("Nova string: ", novaStr)
}

// Substituir0por1("01000100110010")

// Exercício 9
function StringEmReverso(str) {
    let novaStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        novaStr += str[i]
    }
    console.log("Nova string: ", novaStr)
}

// StringEmReverso("Roberto")

// Exercício 10
function StringSemVogal(str) {
    let novaStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
            novaStr += str[i]
        }
    }
    console.log("Nova string: ", novaStr)
}

// StringSemVogal("Roberto")

// Exercício 11

function QuantasVogais(str) {
    let cont = 0;
    let caractere = prompt("Caractere: ").toLowerCase()
    let novaStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
            cont++;
            novaStr += caractere
        } else {
            novaStr += str[i]
        }
    }

    console.log("Quantidade de vogais: ", cont)
    console.log("Nova string: ", novaStr)
}

// QuantasVogais("Roberto")

// Exercício 12
function QuantosEspacos(str) {
    let cont = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            cont++
        }
    }
    console.log("Quantidade de espacos: ", cont)
}

// QuantosEspacos("o Roberto saiu")

// Exercício 13
function RemoverEspacos(str) {
    let novaStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            novaStr += str[i]
        }
    }
    console.log("Nova string: ", novaStr)
}

// RemoverEspacos("o Roberto saiu")

// Exercício 14
function TrocarLetras(str, L1, L2) {
    let novaStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == L1) {
            novaStr += L2
        } else {
            novaStr += str[i]
        }
    }
    console.log("Nova string: ", novaStr)
}

// TrocarLetras("Roberto", "o", "a")

// Função feita para ex 26
function TrocarLetrasPrimeiraOcorrencia(str, L1, L2) {
    let novaStr = ""
    let encontrado = false
    for (let i = 0; i < str.length; i++) {
        if (!encontrado && str[i] == L1) {
            novaStr += L2
            encontrado = true
        } else {
            novaStr += str[i]
        }
    }

    console.log("Nova string: ", novaStr)
}

// TrocarLetrasPrimeiraOcorrencia("Roberto", "o", "a")

// Exercício 15
function LerIdadeeNome() {
    menorIdade = 999
    maiorIdade = 0
    nomeMaiorIdade = ""
    nomeMenorIdade = ""

    for (let i = 0; i < 3; i++) {
        nome = prompt("Nome: ")
        idade = prompt("Idade: ")
        if (idade < 0) {
            break
        }
        if (idade > maiorIdade) {
            maiorIdade = idade
            nomeMaiorIdade = nome
        }
        if (idade < menorIdade) {
            menorIdade = idade
            nomeMenorIdade = nome
        }
    }
    console.log("Nome da pessoa mais velha: ", nomeMaiorIdade, "Idade: ", maiorIdade)
    console.log("Nome da pessoa mais nova: ", nomeMenorIdade, "Idade: ", menorIdade)
}

// LerIdadeeNome()

// Exercício 16
function InvertidaeTrocarLetraA(str) {
    let novaStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        novaStr += str[i]
    }
    for (let i = 0; i < novaStr.length; i++) {
        if (novaStr[i] == "a") {
            novaStr = novaStr.replace("a", "*")
        }
    }
    console.log("Nova string: ", novaStr)
}

// InvertidaeTrocarLetraA("Caramelo")

// Exercício 17
function imprimirSegmento(str, i, j) {
    let novaStr = ""
    for (let k = i; k <= j; k++) {
        novaStr += str[k]
    }
    console.log("Segmento: ", novaStr)
}

// imprimirSegmento("Roberto", 3, 6)

// Exercício 18
function IndiceDeCaractere(str, c, i) {
    let novaStr = ""
    for (let k = i; k < str.length; k++) {
        if (str[k] == c) {
            console.log("Indíce: ", k)
            break
        }
    }
}

// IndiceDeCaractere("Roberto", "o", 3)

// Exercício 19
function QualVemPrimeiroOrdemAlfabetica(str, str2) {
    if (str < str2) {
        console.log("A string que vem primeiro em ordem alfabética é: ", str)
    } else {
        console.log("A string que vem primeiro em ordem alfabética é: ", str2)
    }
}

// QualVemPrimeiroOrdemAlfabetica("Roberto", "Ana")

// Exercício 20
function CodificarCesar(str) {
    str.toLowerCase()
    let novaStr = ""
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let alfabetoCesar = ["d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c"]
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 26; j++) {
            if (str[i] == alfabeto[j]) {
                novaStr += alfabetoCesar[j]
            }
        }
    }

    console.log("Nova string: ", novaStr)
}

// CodificarCesar("Roberto")

// Exercício 21
function VerificarPalindromo(str) {
    let reversoStr = str.split("").reverse().join("")
    if (str === reversoStr) {
        console.log("A string é um palíndromo")
    } else {
        console.log("A string não é um palíndromo")
    }
}

// VerificarPalindromo("racecar")

// Exercício 22
function SegundaStringIgualFinalDaPrimeira(str, str2) {
    if (str.endsWith(str2)) {
        console.log("A string 1 termina com a string 2.")
    }
    else {
        console.log("A string 1 não termina com a string 2.")
    }
}

// SegundaStringIgualFinalDaPrimeira("Roberto", "o")

// Exercício 23
function ConcatenarStrings(str, str2, n) {
    let novaStr = str
    for (let i = 0; i < n; i++) {
        novaStr += str2[i]
    }
    console.log("Nova string: ", novaStr)
}

// ConcatenarStrings("Roberto", "oooooo", 3)

// Exercício 24
function QuantasVezesNaSegundaString(str, str2) {
    let cont = 0
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == str) {
            cont++
        }
    }
    console.log("Quantas vezes a string 1 aparece na string 2: ", cont)
}

// QuantasVezesNaSegundaString("o", "Roberto")

function DividirStringEmVariaveis(str) {

    if (str.split("/").length !== 3) {
        console.log("Entrada inválida")
        return
    }
    else if (str.indexOf("/") !== 3 || str.indexOf("/") !== 6) {
        console.log("Entrada inválida")
    }
    else {
        let dias = str.split("/")[0]
        let meses = str.split("/")[1]
        let ano = str.split("/")[2]
    
        console.log("Dias: ", dias)
        console.log("Meses: ", meses)
        console.log("Ano: ", ano)
    }
}

// DividirStringEmVariaveis("09/10/2023")

// Função feita para ex 26
function VerificarSubstring(str, str2) {
    if (str.includes(str2)) {
        console.log("A string 2 é substring da string 1")
    }
    else {
        console.log("A string 2 não é substring da string 1")
    }
}

// VerificarSubstring("Roberto", "to")

// Exercício 26
function ProgramaMenu(str) {
    console.log("1 - Tamanho da string 1")
    console.log("2 - Comparar string 1 com uma nova string 2")
    console.log("3 - Concatenar string 1 com uma nova string 2")
    console.log("4 - Imprimir string 1 em reverso")
    console.log("5 - Contar quantas vezes um caractere aparece na string 1")
    console.log("6 - Substituir a primeira ocorrência do caractere C1 da string 1 pelo caractere C2")
    console.log("7 - Verificar se uma string 2 é substring da string 1")
    console.log("8 - Retornar uma substring da string 1, posição informada pelo usuário")
    escolha = prompt("Escolha uma das opções: ")
    switch (escolha) {
        case "1":
            console.log(comprimentoString(str))
            break
        case "2":
            let str2_case2 = prompt("String 2: ")
            CompararStrings(str, str2_case2)
            break
        case "3":
            let str2_case3 = prompt("String 2: ")
            let n_case3 = prompt("Caracteres: ")
            ConcatenarStrings(str, str2_case3, n_case3)
            break
        case "4":
            StringEmReverso(str)
            break
        case "5":
            caractere_case5 = prompt("Caractere: ")
            QuantasVezesNaSegundaString(caractere_case5, str)
            break
        case "6":
            caractere_case6 = prompt("Caractere: ")
            caractere2_case6 = prompt("Novo caractere: ")
            TrocarLetrasPrimeiraOcorrencia(str, caractere_case6, caractere2_case6)
            break
        case "7":
            let str2_case7 = prompt("String 2: ")
            VerificarSubstring(str, str2_case7)
            break
        case "8":
            posicaoInicial = prompt("Posição inicial: ")
            posicaoFinal = prompt("Posição final: ")
            
            if (posicaoInicial >= 0 && posicaoInicial < str.length && posicaoFinal > posicaoInicial && posicaoFinal <= str.length) {
                let resultado = str.substring(posicaoInicial, posicaoFinal)
                console.log("Substring: ", resultado)
            } 
            else {
                console.log("Posições inválidas")
            }
            break
        }
}

// ProgramaMenu("Roberto")
