async function buscarFilme() {
    let titulo = document.getElementById("titulo").value
    let resposta = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=c14aa168`)
    let dados = await resposta.json()
    console.log(dados)
    document.getElementById("titulo").value = dados.Title
    document.getElementById("ano").value = dados.Year
    document.getElementById("duracao").value = dados.Runtime
    document.getElementById("genero").value = dados.Genre
    document.getElementById("diretor").value = dados.Director
    document.getElementById("poster").src = dados.Poster
}