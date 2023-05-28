function exe3() {

    let FaixaEtaria1 = 0; let FaixaEtaria2 = 0; let FaixaEtaria3 = 0; let FaixaEtaria4 = 0; let FaixaEtaria5 = 0; let total = 0

    for (let quantidadeIdades = 1; quantidadeIdades <= 8; quantidadeIdades++) {
        let idade = Number(prompt("Informe a idade:"))
        if (idade <= 15) {
            FaixaEtaria1++
            total++
        }
        if (idade >= 16 && idade <= 30) {
            FaixaEtaria2++
            total++
        }
        if (idade >= 31 && idade <= 45) {
            FaixaEtaria3++
            total++
        }
        if (idade >= 46 && idade <= 60) {
            FaixaEtaria4++
            total++
        }
        if (idade >= 61) {
            FaixaEtaria5++
            total++
        }
    }
    let PorcentagemFaixaEtaria1SobreTotal = (FaixaEtaria1 / total) * 100
    let PorcentagemFaixaEtaria5SobreTotal = (FaixaEtaria5 / total) * 100

    alert(`Faixa Etária 1: ${FaixaEtaria1} \n Faixa Etária 2: ${FaixaEtaria2} \n Faixa Etária 3: ${FaixaEtaria3} \n Faixa Etária 4: ${FaixaEtaria4} \n Faixa Etária 5: ${FaixaEtaria5} \n Porcentagem Faixa Etária 1 sobre o total: ${PorcentagemFaixaEtaria1SobreTotal.toFixed(2)}% \n Porcentagem Faixa Etária 5 sobre o total: ${PorcentagemFaixaEtaria5SobreTotal.toFixed(2)}%`)
}