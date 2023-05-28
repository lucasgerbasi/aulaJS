function exe20() {
    let escolha = prompt("Escolha a sua opção: \n 1 - Média Arítmética \n 2 - Média Ponderada \n 3 - Sair")
    switch(escolha) {
        case "1":
            n1 = Number(prompt("Digite a primeira nota: "))
            n2 = Number(prompt("Digite a segunda nota: "))
            media = (n1 + n2) / 2
            alert(`A média aritmética é: ${media}`)
            break
        case "2":
            n1 = Number(prompt("Digite a primeira nota: "))
            n2 = Number(prompt("Digite a segunda nota: "))
            n3 = Number(prompt("Digite a terceira nota: "))
            peso1 = Number(prompt("Digite o peso da primeira nota: "))
            peso2 = Number(prompt("Digite o peso da segunda nota: "))
            peso3 = Number(prompt("Digite o peso da terceira nota: "))
            ponderada = (n1 * peso1 + n2 * peso2 + n3 * peso3) / (peso1 + peso2 + peso3)
            alert(`A média ponderada é: ${ponderada.toFixed(2)}`)
            break
        case "3":
            alert("Até mais!")
            break
        default:
            alert("Opção inválida")
            break
    }
}