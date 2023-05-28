function exe23(){
    let salario, novo, ferias, decimoTerceiro, meses, opcao
    do{
        opcao = Number(prompt(`Escolha uma opção: \n 1. Novo salário \n 2. Férias \n 3. Décimo terceiro \n 4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe salário: `))
                    if ((salario >=0) && (salario < 210)){
                        novo = salario + salario*15/100
                    }
                    else if ((salario >= 210) && (salario <=600)){
                            novo = salario + salario*10/100
                    }
                    else if (salario > 600){
                        novo = salario + salario*5/100
                    } 
                    else {
                        alert('Salário negativo'); break
                    }
                    alert(`Novo salário: ${novo}`); break
            case 2: salario = Number(prompt(`Informe salário: `))
                    ferias = salario + 1/3*salario
                    alert(`Férias: ${ferias}`); break
            case 3: salario = Number(prompt(`Informe salário: `))
                    meses = Number(prompt(`Informe meses: `))
                    if ((meses >=1 ) && (meses <=12)){
                        decimoTerceiro = salario + salario * meses/12
                        alert(`Décimo terceiro: ${decimoTerceiro}`)
                    }
                    else {
                        alert(`Número de meses inválido`)
                    }
                    break
            case 4: alert('Até mais!'); break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
}