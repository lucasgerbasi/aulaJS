function ex7(){
    let idade, altura, peso
    let idade50 = 0; let SomaAltura = 0; let ContaAltura = 0; let peso40 = 0

    for(let cont = 1; cont <= 5; cont++) {
        idade = Number(prompt("Informe idade: "))
        altura = Number(prompt("Informe altura: "))
        peso = Number(prompt("Informe peso: "))
        if(idade > 50) {
            idade50++
        }
        else if(idade >= 10 && idade <= 20) {
            SomaAltura = SomaAltura + altura
            ContaAltura++
        }
        if(peso < 40) {
            peso++
        }
    }
    alert(`Idade > 50 ${idade50}`)
    alert(`Média de altura com 10 <= idade <= 20 ${SomaAltura/contaAltura}`)
    alert(`Peo < 40 ${peso40/5 * 100}`)
}