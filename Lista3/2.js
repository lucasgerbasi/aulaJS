function exe2() {
    const ingressosBaseVendidos = 120;
    const ingressosAdicionais = 26;

    for (let i = 0; i <= 8; i++) {
        precoIngresso = 5 - (0.5 * i);

        let totalIngressosVendidos = ingressosBaseVendidos + ingressosAdicionais * (5 - precoIngresso);
        let receita = totalIngressosVendidos * precoIngresso;
        let despesas = 200;
        let lucro = receita - despesas;

        alert("Preço do ingresso: $" + precoIngresso.toFixed(2) + "\nIngressos Vendidos: " + totalIngressosVendidos + "\nLucro: $" + lucro.toFixed(2));
    }
}

exe2();
