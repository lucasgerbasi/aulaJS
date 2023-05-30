function exe1() {
    let numeros = []; let QuantidadePar = []; let QuantidadeImpar = []
    for (i = 0; i < 6; i++) {
        numeros.push(Number(prompt(`Digite o vetor ${i}`)))
        if (numeros[i] % 2 == 0) {
            QuantidadePar.push(numeros[i])
        } 
        else if (numeros[i] % 2 != 0) {
            QuantidadeImpar.push(numeros[i])
        }
        else {
            alert("Número inválido")
        }
    }
    console.log(`
Vetor de números pares: ${QuantidadePar}
Vetor de números ímpares: ${QuantidadeImpar}
Contador Par: ${QuantidadePar.length}
Contador Ímpar: ${QuantidadeImpar.length}`)
}

exe1()