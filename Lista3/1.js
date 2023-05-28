function exe1() {
    let conjuntos = [];
    for (let i = 0; i < 5; i++) {
        let grupo = [];
        for (let j = 0; j < 4; j++) {
            let valor = Number(prompt("Informe um valor:"));
            grupo[j] = valor;
        }
        conjuntos[i] = grupo;
    }
    return conjuntos;
}

let conjuntos = exe1();

let ordemCrescente = conjuntos.map(grupo => [...grupo].sort((a, b) => a - b))

let ordemDecrescente = conjuntos.map(grupo => [...grupo].sort((a, b) => b - a))

console.log("Ordem Crescente:", ordemCrescente);
console.log("Ordem Decrescente:", ordemDecrescente);
