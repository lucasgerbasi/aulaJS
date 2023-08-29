let farmaciasLista = []
let remediosLista = []

async function farmacias() {
    for (let i = 0; i < 2; i++) {
        await entradaDadosFarmacia()
    }
    for (let i = 0; i < 2; i++) {
        await entradaDadosRemedio()
    }
    for (let i = 0; i < 1; i++) {
        await compra()
    }
}

async function entradaDadosFarmacia() {
    let codigoFar = Number(prompt("Insira o código da farmácia: "))
    if (farmaciasLista.find(farmacia => farmacia.codigoFar === codigoFar)) {
        console.log("Já existe uma farmácia com esse código, tente novamente.")
        return
    }

    let nomeFar = prompt("Insira o nome da farmácia: ")
    let endereco = prompt("Insira o endereço da farmácia: ")

    let farmacia = {
        codigoFar: codigoFar,
        nomeFar: nomeFar,
        endereco: endereco
    }

    farmaciasLista.push(farmacia)
}

async function entradaDadosRemedio() {
    let codigoFar = Number(prompt("Insira o código da farmácia: "))

    if (!farmaciasLista.find(farmacia => farmacia.codigoFar === codigoFar)) {
        console.log("A farmácia com esse código não existe, tente novamente.");
        return;
    }

    let nomeRem = prompt("Insira o nome do remédio: ");
    let qtdEstoque = Number(prompt("Insira a quantidade desse remédio em estoque: "));
    let preco = Number(prompt("Insira o preço desse remédio: "));

    let remedio = {
        codigoFar: codigoFar,
        nomeRem: nomeRem,
        qtdEstoque: qtdEstoque,
        preco: preco
    };

    remediosLista.push(remedio)
}

async function compra() {
    let nomeRemedio = prompt("Insira o nome do remédio que deseja comprar: ")

    let remedio = remediosLista.find(remedio => remedio.nomeRem === nomeRemedio)

    if (!remedio) {
        console.log("O remédio não está disponível para compra!");
        return;
    }

    remedio.qtdEstoque--;

    console.log("Compra realizada com sucesso!");
}
