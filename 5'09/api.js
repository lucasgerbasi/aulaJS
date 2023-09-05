async function buscaCep() {
    let cep = document.getElementById("cep").value
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let dados = await resposta.json()
    document.getElementById("logradouro").value = dados.logradouro
    document.getElementById("complemento").value = dados.complemento
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("localidade").value = dados.localidade
    document.getElementById("uf").value = dados.uf
    document.getElementById("ibge").value = dados.ibge
    document.getElementById("gia").value = dados.gia
    document.getElementById("ddd").value = dados.ddd
    document.getElementById("siafi").value = dados.siafi
}