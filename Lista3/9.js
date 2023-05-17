function exe9() {
    let idade, peso, altura
    let mediaIdade = 0; let peso90 = 0; let pctgIdade1030 = 0; contIdade = 0; let contIdade1030 = 0;

    for (let cont = 1; cont <= 10; cont++) {
        idade = Number(prompt("Informe idade: "))
        peso = Number(prompt("Informe peso: "))
        altura = Number(prompt("Informe altura: "))

        contIdade = contIdade + idade
        mediaIdade = contIdade / 10

        if (idade >= 10 && idade <= 30 && altura > 1.9) {
            contIdade1030++
        }
        if (peso > 90 && altura < 1.5) {
            peso90++
        }
        
    }
    pctgIdade1030 = (contIdade1030 /10) * 100

    alert(`Media de idade: ${mediaIdade}`)
    alert(`Porcentagem de idade entre 10 e 30 com altura maior que 1,9m: ${pctgIdade1030}%`)
    alert(`Quantidade de pessoas com peso maior que 90kg e altura menor que 1,5m: ${peso90}`)
}