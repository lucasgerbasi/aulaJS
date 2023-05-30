function exe2() {
    let numeros = []; MultiplosDe2 = []; MultiplosDe3 = []; MultiplosDe2e3 = [];
    for (i = 0; i < 7; i++) {
        numeros.push(Number(prompt(`Digite o seu número ${i}`)))
        if(numeros[i] % 2 == 0) {
            MultiplosDe2.push(numeros[i])
            MultiplosDe2e3.push(numeros[i])
        }
        else if (numeros[i] % 3 == 0) {
            MultiplosDe3.push(numeros[i])
            MultiplosDe2e3.push(numeros[i])
        }
        else {
            alert("Número inválido")
        }
    }
    console.log(`
Múltiplos de 2: ${MultiplosDe2}
Múltiplos de 3: ${MultiplosDe3}
Múltiplos de 2 e 3: ${MultiplosDe2e3}`)
}
exe2()