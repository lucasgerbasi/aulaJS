function exe8() {
    let idade, altura, peso, corOlhos, corCabelo
    let idade50 = 0; let mediaIdade; let pctgOlhoAzul; let RuivoNaoAzul = 0; let OlhosAzul = 0; let ContIdade = 0; let ContAltura = 0;

    for(let cont = 1; cont <= 6; cont++) {
        idade = Number(prompt("Informe idade: "))
        altura = Number(prompt("Informe altura: "))
        peso = Number(prompt("Informe peso: "))
        corOlhos = prompt("Informe cor dos olhos: (A - Azul; P - Preto; V - Verde; C - Castanho)")
        corCabelo = prompt("Informe cor do cabelo: (P - Preto; C - Castanho; L - Louro; R - Ruivo)")

        if (idade > 50 && peso < 60) {
            idade50++
        }
        if (corCabelo == "R" && corOlhos != "A") {
            RuivoNaoAzul++
        }
        if (corOlhos == "A") {
            OlhosAzul++
        }
        if (altura < 1.50) {
            ContIdade = ContIdade + idade
            ContAltura++
        }

    }
    mediaIdade = ContIdade / ContAltura
    pctgOlhoAzul = (OlhosAzul / 6) * 100;
    alert(`Idade > 50 e peso menor que 60kg: ${idade50}`)
    alert(`Média de idade com altura menor que 1,50m: ${mediaIdade}`)
    alert(`Porcentagem de olhos azul: ${pctgOlhoAzul}%`)
    alert(`Quantidade de ruivos sem olhos azul: ${RuivoNaoAzul}`)
}