function exe21() {
    let cand1 = 0, cand2 = 0, cand3 = 0, cand4 = 0, nulo = 0, branco = 0, total = 0, opcao

    do {
        opcao = Number(prompt("Escolha o seu candidato: \n Candidato 1 \n Candidato 2 \n Candidato 3 \n Candidato 4 \n 5 = Nulo \n 6 = Branco"))
        switch(opcao) {
            case 1:
                cand1++
                total++
                break
            case 2:
                cand2++
                total++
                break
            case 3:
                cand3++
                total++
                break
            case 4:
                cand4++
                total++
                break
            case 5:
                nulo++
                total++
                break
            case 6:
                branco++
                total++
                break
            default:
                alert("Voto inválido!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        }
        alert(`Candidato 1 votos: ${cand1} \n candidato 2 votos: ${cand2} \n candidato 3 votos: ${cand3} \n candidato 4 votos: ${cand4} \n votos nulos: ${nulo} \n votos brancos: ${branco} \n porcentagem de votos nulos sobre o total de votos: ${(nulo/total) * 100} \n porcentagem de votos em branco sobre o total de votos: ${(branco/total) * 100} `)
    }
    while(opcao != 0) 
}

exe21()