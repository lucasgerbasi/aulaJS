function ex1() {
    eleicao = []
    let partidos = ["PT", "PSDB", "PL", "PSB"]
    let maisVotado = 0
    let nomeMaisVotado = ""
    let partidoMaisVotado = ""

    for (let i = 0; i < 2; i++) {
        let votacao = {
            codigo: Number(prompt("Insira o código do candidato: ")),
            nome: prompt("Insira o nome do candidato: "),
            partido: prompt("Insira o partido do candidato: (PT, PSDB, PL, PSB)").toUpperCase(),
            qtdVotos: Number(prompt("Informe a quantidade de votos: "))
        }
        while (!partidos.includes(votacao.partido)) {
            votacao.partido = prompt("Partido inválido, tente novamente: (PT, PSDB, PL PSB)").toUpperCase()
        }
        if (votacao.qtdVotos > maisVotado) {
            maisVotado = votacao.qtdVotos
            nomeMaisVotado = votacao.nome
            partidoMaisVotado = votacao.partido
        }
        eleicao.push(votacao)
    }
    console.log("Candidato mais votado: ", nomeMaisVotado, "\nVotos:", maisVotado, "\nPartido mais votado: ", partidoMaisVotado)
}