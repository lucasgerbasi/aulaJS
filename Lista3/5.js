function exe5() {
    let valor = 0
    
    for(let i = 0; i != 10; i++) {
        valor++
        let resultado = ""
    
        for (let j = 0; j != 11; j++) {
            resultado += valor + " x " + j + " = " + (valor * j) + "\n"
        }
    
        alert(resultado)
    }
}