function exe1() {
    let vetor = []
    // entrada de dados
    for (let i = 0; i < 6; i++) {
        vetor[i] = Number(prompt(`Informe o ${i + 1}o. elemento`))
    }
    // cria os vetores pares e impares
    let pares = []; let iPares = 0; // índice do vetor de pares
    let impares = []; let iImpares = 0 // índice do vetor de ímpares
    for (let i = 0; i < 6; i++) {
        if (vetor[i] % 2 == 0) {
            pares[iPares] = vetor[i]
            iPares++ // incremento o índice do vetor de pares
        }
        else {
            impares[iImpares] = vetor[i]
            iImpares++ // incremento o índice do vetor de ímpares
        }
    }
    console.log(`Pares ${pares} Qtde: ${pares.length}`)
    console.log(`Ímpares ${impares} Qtde: ${impares.length}`)
}

function exe2() {
    let vetor = []
    for (let i = 0; i < 7; i++) {
        vetor[i] = Number(prompt(`Informe o ${i + 1}o. elemento`))
    }
    // cria os vetores novos
    let mult2 = [], mult3 = [], mult2e3 = []
    for (let i = 0; i < 7; i++) {
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            mult2e3.push(vetor[i])
            mult2.push(vetor[i])
            mult3.push(vetor[i])
        }
        else if (vetor[i] % 2 == 0) {
            mult2.push(vetor[i])
        }
        else if (vetor[i] % 3 == 0) {
            mult3.push(vetor[i])
        }
    }
    console.log(`Múltiplos de 2 ${mult2}`)
    console.log(`Múltiplos de 3 ${mult3}`)
    console.log(`Múltiplos de 2 e 3 ${mult2e3}`)
}

function exe3() {
    let codigos = []
    let estoque = []
    for (let i = 0; i < 5; i++) {
        codigos[i] = Number(prompt(`Informe código do produto ${i + 1}`))
        estoque[i] = Number(prompt(`Informe qtde em estoque do produto ${i + 1}`))
    }
    let cliente = Number(prompt('Informe código do cliente'))
    while (cliente != 0) {
        let codigo = Number(prompt(`Informe o código do produto para compra`))
        let qtde = Number(prompt(`Informe qtde para compra`))
        // vamos procurar o código do produto
        let achou = false // não encontrei o produto
        for (let i = 0; i < 5; i++) {
            if (codigo == codigos[i]) {
                achou = true // achou
                if (estoque[i] >= qtde) { // tem em estoque
                    estoque[i] = estoque[i] - qtde
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert('Compra não realizada, falta do produto')
                }
            }
        }
        // encerrou a procura
        if (!achou) { // não encontrou
            alert('Produto não encontrado')
        }
        cliente = Number(prompt('Informe outro código do cliente. Digite 0 para encerrar'))
    }
    console.log(`Estoque atualizado ${estoque}`)
}

function exe4() {
    // entrada de dados
    let vet = []
    for (let i = 0; i < 10; i++) {
        vet[i] = Number(prompt(`Informe o ${i + 1}o. elemento`))
    }
    // cria um vetor que guarda as posições do número 30
    let posicoes = []
    for (let i = 0; i < 10; i++) {
        if (vet[i] == 30) {
            posicoes.push(i)
        }
    }
    alert(`Posições aonde o 30 aparecem ${posicoes}`)
}

function exe5() {
    let logica = []
    let linguagem = []
    let comum = []
    for (let i = 0; i < 10; i++) {
        logica[i] = Number(prompt(`Informe o ${i}o. aluno que faz Lógica`))
    }
    for (let i = 0; i < 5; i++) {
        linguagem[i] = Number(prompt(`Informe o ${i}o. aluno que faz Linguagem`))
    }
    // vamos verificar a intersecção
    for (let i = 0; i < 10; i++) {
        if (linguagem.includes(logica[i])) {
            comum.push(logica[i])
        }
    }
    alert(`Alunos que fazem as duas disciplinas ${comum}`)
}

function exe6() {
    let vendas = []
    let percentuais = []
    let nomes = []
    let comissoes = []
    for (let i = 0; i < 5; i++) {
        vendas[i] = Number(prompt(`Informe venda do ${i + 1} vendedor`))
        percentuais[i] = Number(prompt(`Informe % do ${i + 1} vendedor`))
        nomes[i] = prompt(`Informe nome do ${i + 1} vendedor`)
        // calcula comissão do vendedor
        comissoes[i] = (vendas[i] / percentuais[i]) * 100
    }
    // fazer cálculos 
    let total = 0
    let maior = comissoes[0]; let menor = comissoes[0]
    for (let i = 0; i < 5; i++) {
        total = total + vendas[i]
        if (comissoes[i] > maior) {
            maior = comissoes[i]
        }
        if (comissoes[i] < menor) {
            menor = comissoes[i]
        }
    }
    console.log(`Valor total vendido ${total}`)
    console.log(`Maior valor ${maior} e quem recebe ${nomes[comissoes.indexOf(maior)]}`)
    console.log(`Menor valor ${menor} e quem recebe ${nomes[comissoes.indexOf(menor)]}`)

}

function exe7() {
    let vetor = [];

    for (let i = 0; i < 10; i++) {
        let numero = Number(prompt(`Insira o número ${i + 1}`));
        vetor.push(numero);
    }

    let quantidadeNegativos = 0;
    let somaPositivos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            quantidadeNegativos++;
        } else if (vetor[i] > 0) {
            somaPositivos += vetor[i];
        }
    }

    console.log("Vetor:", vetor);
    console.log("Quantidade de Negativos:", quantidadeNegativos);
    console.log("Soma dos Positivos:", somaPositivos);

}

function exe8() {
    let nomesAlunos = [];
    let mediasFinais = [];
    let maiorMedia = 0;
    let alunoMaiorMedia = "";

    for (let i = 0; i < 7; i++) {
        let nome = prompt(`Digite o nome do aluno ${i + 1}:`);
        nomesAlunos.push(nome);

        let media = Number(prompt(`Digite a média final de ${nome}:`));
        mediasFinais.push(media);

        if (media > maiorMedia) {
            maiorMedia = media;
            alunoMaiorMedia = nome;
        }
    }

    console.log("Nomes dos Alunos:", nomesAlunos);
    console.log("Médias Finais:", mediasFinais);
    console.log("Aluno com Maior Média:", alunoMaiorMedia);

    console.log("---- Resultados de Aprovação ----");
    for (let i = 0; i < mediasFinais.length; i++) {
        let media = mediasFinais[i];
        if (media < 7) {
            let notaNecessaria = 10 - media;
            console.log(`${nomesAlunos[i]} precisa de ${notaNecessaria.toFixed(2)} na prova final para ser aprovado.`);
        }
    }
}

function exe9() {
    let nomesProdutos = [];
    let codigosProdutos = [];
    let precosProdutos = [];

    for (let i = 0; i < 10; i++) {
        let nome = prompt(`Digite o nome do produto ${i + 1}:`);
        nomesProdutos.push(nome);

        let codigo = Number(prompt(`Digite o código do produto ${nome}:`));
        codigosProdutos.push(codigo);

        let preco = Number(prompt(`Digite o preço do produto ${nome}:`));
        precosProdutos.push(preco);
    }

    console.log("---- Relatório de Produtos ----");
    for (let i = 0; i < 10; i++) {
        let nome = nomesProdutos[i];
        let codigo = codigosProdutos[i];
        let preco = precosProdutos[i];
        let novoPreco = preco;

        if (codigo % 2 === 0 || preco > 1000) {
            if (codigo % 2 === 0 && preco > 1000) {
                novoPreco *= 1.2;
            } else if (codigo % 2 === 0) {
                novoPreco *= 1.15;
            } else {
                novoPreco *= 1.1;
            }

            console.log("Nome:", nome);
            console.log("Código:", codigo);
            console.log("Preço Original:", preco.toFixed(2));
            console.log("Novo Preço:", novoPreco.toFixed(2));
            console.log("-----------------------------");
        }
    }
}

function exe10() {
    let vetor1 = [];
    let vetor2 = [];

    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1} do primeiro vetor:`));
        vetor1.push(numero);
    }

    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1} do segundo vetor:`));
        vetor2.push(numero);
    }

    let resultadoSoma = [];
    let resultadoDivisores = [];

    for (let i = 0; i < vetor1.length; i++) {
        let numero1 = vetor1[i];

        if (numero1 % 2 == 0) {
            for (let j = 0; j < vetor2.length; j++) {
                let numero2 = vetor2[j];
                resultadoSoma.push(numero1 + numero2);
            }
        }
        else {
            let contadorDivisores = 0;
            for (let j = 0; j < vetor2.length; j++) {
                let numero2 = vetor2[j];
                if (numero2 != 0 && numero1 % numero2 == 0) {
                    contadorDivisores++;
                }
            }
            resultadoDivisores.push(contadorDivisores);
        }
    }

    console.log("Resultado da Soma:", resultadoSoma);
    console.log("Resultado dos Divisores:", resultadoDivisores);
}