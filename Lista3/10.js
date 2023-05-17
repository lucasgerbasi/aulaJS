function exe10(){
    let primos, naoPrimos, n1
    let somapar = 0; let somaprimos = 0;

    for(let cont = 1; cont <=10; cont++) {
        n1 = Number(prompt("Digite seu número: "))
        if(n1 % 2 == 0) {
            somapar = somapar + n1
        }
        if(n1 % n1 == 0 && n1 % 1 == 0) {
            somaprimos = somaprimos + n1
        }
    }
    alert(`Soma dos pares: ${somapar}`)
    alert(`Soma dos primos: ${somaprimos}`)
}