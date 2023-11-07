function comprimentoString(str) {
    let i = 0
    while (str[i] !== undefined) {
        i++
    }
    console.log("Comprimento: " + i)
}

comprimentoString("teste")

function LerNomes(str) {
    if (str[0] == "a" || str[0] == "A") {
        console.log("Nome: " + str)
    }
}

LerNomes("joao")

function Imprima4LetrasNome(str) {
    let i = 0
    for (i = 0; i < 4; i++) {
        console.log(str[i])
    }
}

Imprima4LetrasNome("Roberto")

function QuantasLetrasNome(str) {
    console.log("Quantidade de letras: " + str.length)
}

QuantasLetrasNome("Roberto")

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

AceitaNaoAceita("Ana", "F", 20)

function CompararStrings(str, str2) {
    if (str == str2) {
        console.log("IGUAIS")
    }
    else {
        console.log("DIFERENTES")
    }
}

CompararStrings("teste", "teste")

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

ContNum1emString("01000100110010")

function Substituir0por1(str) {
    let novaStr = str.replace(/0/g, "1")
    console.log("Nova string: ", novaStr)
}

Substituir0por1("01000100110010")

function StringEmReverso(str) {
    let novaStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        novaStr += str[i]
    }
    console.log("Nova string: ", novaStr)
}

StringEmReverso("Roberto")

function StringSemVogal(str) {
    let novaStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
            novaStr += str[i]
        }
    }
    console.log("Nova string: ", novaStr)
}

StringSemVogal("Roberto")

function QuantasVogais(str) {
    let cont = 0;
    let caractere = prompt("Caractere: ").toLowerCase();
    let novaStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a" || str[i].toLowerCase() === "e" || str[i].toLowerCase() === "i" || str[i].toLowerCase() === "o" || str[i].toLowerCase() === "u") {
            cont++;
            novaStr += caractere;
        } else {
            novaStr += str[i];
        }
    }

    console.log("Quantidade de vogais: ", cont);
    console.log("Nova string: ", novaStr);
}

QuantasVogais("Roberto");

function QuantosEspacos(str) {
    let cont = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            cont++
        }
    }
    console.log("Quantidade de espacos: ", cont)
}

QuantosEspacos("o Roberto saiu")

function RemoverEspacos(str) {
    let novaStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            novaStr += str[i]
        }
    }
    console.log("Nova string: ", novaStr)
}

RemoverEspacos("o Roberto saiu")

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

TrocarLetras("Roberto", "o", "a")

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

LerIdadeeNome()

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

InvertidaeTrocarLetraA("Caramelo")

function imprimirSegmento(str, i, j) {
    let novaStr = ""
    for (let k = i; k <= j; k++) {
        novaStr += str[k]
    }
    console.log("Segmento: ", novaStr)
}

imprimirSegmento("Roberto", 3, 6)

function IndiceDeCaractere(str, c, i) {
    let novaStr = ""
    for (let k = i; k < str.length; k++) {
        if (str[k] == c) {
            console.log("Indíce: ", k)
            break
        }
    }
}

IndiceDeCaractere("Roberto", "o", 3)

function QualVemPrimeiroOrdemAlfabetica(str, str2) {
    if (str < str2) {
        console.log("A string que vem primeiro em ordem alfabética é: ", str)
    } else {
        console.log("A string que vem primeiro em ordem alfabética é: ", str2)
    }
}

QualVemPrimeiroOrdemAlfabetica("Roberto", "Ana")

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

CodificarCesar("Roberto")

function VerificarPalindromo(str) {
    let reversoStr = str.split("").reverse().join("");
    if (str === reversoStr) {
        console.log("A string é um palíndromo");
    } else {
        console.log("A string não é um palíndromo");
    }
}

VerificarPalindromo("racecar");

function SegundaStringIgualFinalDaPrimeira(str, str2) {
    if (str.endsWith(str2)) {
        console.log("A string 1 termina com a string 2.");
    }
    else {
        console.log("A string 1 não termina com a string 2.");
    }
}

SegundaStringIgualFinalDaPrimeira("Roberto", "o")
