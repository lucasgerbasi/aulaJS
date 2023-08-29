let PartidosLista = []
let CandidadosLista = []

principal = () => {
    entradaDadosPartidos()
}

function entradaDadosPartidos() {
    for (i = 0; i < 5; i++) {
            let PartidoCodigo = Number(prompt("Insira o código do partido: "))
            let PartidoNome = prompt("Insira o nome do partido: ")
            let PartidoSigla = prompt("Insira a sigla do partido: ")
            let ContPoliticos = Number(prompt("Insira a quantidade de políticos no partido: "))
    }

    let partidos = {
        PartidoCodigo: PartidoCodigo,
        PartidoNome: PartidoNome,
        PartidoSigla: PartidoSigla,
        ContPoliticos: ContPoliticos
    }

    PartidosLista.push(partidos)
}