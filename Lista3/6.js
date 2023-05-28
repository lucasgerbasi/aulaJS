function exe6() {
    let codigo; let transacaoVista = 0; let transacaoPrazo = 0; total = 0; valor = 0;

    for (i = 1; i <= 15; i++) {
        codigo = prompt("A sua transação será à vista (V) ou à prazo (P)? ")
        valor = Number(prompt("Informe o valor da sua transação: "))
        if (codigo == 'V') {
            transacaoVista += valor
            total += valor
        }
        if (codigo == 'P') {
            transacaoPrazo += valor
            total += valor
        }
    }

    let primeiraPrestacao = transacaoPrazo / 3
    alert(`Valor total de transações à vista: ${transacaoVista} \n Valor total de transações a prazo: ${transacaoPrazo} \n Valor total das transações: ${total} \n Valor da primeira prestação das compras à prazo: ${primeiraPrestacao.toFixed(2)}`)
}