function exe3() {
    let codigos = []; let estoque = [];
    let achou = false
    for(let i = 0; i < 5; i++) {
        codigos[i] = Number(prompt(`Informe o código do produto: ${i+1}`))
        estoque[i] = Number(prompt(`Digite o estoque do produto: ${i+1}`))
    }
    let cliente = Number(prompt("Informe o código do cliente: "))
    while(cliente != 0) {
        let codigo = Number(prompt("Insira o código do produto que você quer comprar: "))
        let quantidade = Number(prompt("Informe a quantidade desse produto que você quer comprar: "))
        
        for(let i = 0; i < 5; i++) {
            if(codigo == codigos[i]) {
                achou = true
                if (estoque[i] >= qtde) {
                    estoque[i] = estoque[i] - quantidade
                    console.log(estoque[i])
                }
                else {
                    alert("Estoque insuficiente")
                }
            }
        }
        if (!achou) {
            alert("Produto não existe")
        }
        cliente = Number(prompt("Informe o código do cliente. Digite 0 para encerrar."))
    }
}

exe3()