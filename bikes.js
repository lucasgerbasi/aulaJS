function validarMarca(marca) {
    let marcas = ["CALOI", "SCOTT", "CANONDALE"];
    while (!marcas.includes(marca)) {
        marca = prompt("Marca inválida, tente novamente: (Caloi, Scott, Canondale)");
    }
    return marca;
}

function EntradaBikeDados() {
    let bike = {
        marca: validarMarca(prompt("Insira a marca da bike: (Caloi, Scott, Canondale)").toUpperCase()),
        modelo: Number(prompt("Insira o modelo da bike: ")),
        quadro: Number(prompt("Insira o quadro da bike: ")),
        aro: Number(prompt("Insira o aro da bike: ")),
        ano: Number(prompt("Insira o ano da bike: ")),
        preco: Number(prompt("Insira o preço da bike: "))
    };
    return bike;
}

function calcularEstatisticas(bikes) {
    let contCaloi = 0;
    let contAro29 = 0;
    let maiorAro = 0;
    let maiorQuadro = 0;
    let menorAno = 0;
    let somaPreco = 0;

    for (let i = 0; i < bikes.length; i++) {
        if (bikes[i].quadro > maiorQuadro) {
            maiorQuadro = bikes[i].quadro;
        }
        if (bikes[i].ano < menorAno) {
            menorAno = bikes[i].ano;
        }
        if (bikes[i].marca === "Caloi") {
            contCaloi++;
        }
        if (bikes[i].aro === 29) {
            contAro29++;
        }

        somaPreco += bikes[i].preco;
    }

    let media = somaPreco / bikes.length;

    return {
        contCaloi,
        contAro29,
        maiorAro,
        maiorQuadro,
        menorAno,
        media
    };
}

function ex1() {
    let bikes = [];

    for (let i = 0; i < 2; i++) {
        let bike = EntradaBikeDados();
        bikes.push(bike);
    }

    let {
        contCaloi,
        contAro29,
        maiorQuadro,
        menorAno,
        media
    } = calcularEstatisticas(bikes);

    console.log(`Média do preço das bikes: ${media.toFixed(2)} \nBike mais antiga: ${menorAno} \nQuantidade de bikes de marca Caloi: ${contCaloi} \nQuantidade de bikes com aro 29: ${contAro29} \nBike com o maior quadro: ${maiorQuadro}`);
}
