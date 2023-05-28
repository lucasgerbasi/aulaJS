function exe4() {
    let valor = Number(prompt("Informe um valor:"))
    let resultado = ""

    for (let i = 0; i != 11; i++) {
        resultado += valor + " x " + i + " = " + (valor * i) + "\n"
    }

    alert(resultado)
}