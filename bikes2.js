let marcas = ["CALOI", "SCOTT", "CANONDALE"];

function ex1() {
    let bikes = [];
    let contCaloi = 0;
    let contAro29 = 0;
    let maiorQuadro = 0;
    let menorAno = Infinity;
    let somaPreco = 0;

    for (let i = 0; i < 2; i++) {
        let marca = prompt("Insira a marca da bike: (Caloi, Scott, Canondale)").toUpperCase()
        let modelo = Number(prompt("Insira o modelo da bike: "))
        let quadro = Number(prompt("Insira o quadro da bike: "))
        let aro = Number(prompt("Insira o aro da bike: "))
        let ano = Number(prompt("Insira o ano da bike: "))
        let preco = Number(prompt("Insira o preço da bike: "))
        while (!marcas.includes(marca)) {
            marca = prompt("Marca inválida, tente novamente: (Caloi, Scott, Canondale)")
        }

        if (quadro > maiorQuadro) {
            maiorQuadro = quadro;
        }
        if (ano < menorAno) {
            menorAno = ano;
        }
        if (marca === "CALOI") {
            contCaloi++;
        }
        if (aro === 29) {
            contAro29++;
        }

        somaPreco += preco;

        bikes.push({ marca,modelo,quadro,aro,ano,preco });
    }

    let media = somaPreco / bikes.length;

    console.log(`Média do preço das bikes: ${media.toFixed(2)} \nBike mais antiga: ${menorAno} \nQuantidade de bikes de marca Caloi: ${contCaloi} \nQuantidade de bikes com aro 29: ${contAro29} \nBike com o maior quadro: ${maiorQuadro}`);
}
