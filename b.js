function principal() {
    let albums = [];
    let figurinhas = [];   
    let opcao
    do {
        opcao = Number(prompt(`Escolha a opção desejada: \n 1. Cadastrar Álbum \n 2. Cadastrar Figurinha \n 3. Comprar Figurinha \n 4. Trocar Figurinha \n 5. Mostrar Figurinhas \n 6. Calcular figurinha com maior quantidade \n 7. Sair `))
        switch(opcao) {
            case 1: cadastrarAlbum(albums)
                break
            case 2: cadastrarFigurinha(albums, figurinhas)
                break
            case 3: comprarFigurinha(figurinhas)
                break
            case 4: trocarFigurinha(figurinhas)
                break
            case 5: mostrarFigurinha(figurinhas)
                break
            case 6: maiorQuantidade(figurinhas)
                break
            case 7: alert("Saindo...")
                break
            default: alert("Opção inválida.")
        }
    } while (opcao != 7)
}


function cadastrarAlbum(albums) {
  const id = Number(prompt("Insira o id do álbum: "))
  if (albums.some(album => album.id === id) || albums.some(album => album.nome === nome)) {
    console.log("Não é possível cadastrar dois álbuns com o mesmo id ou nome.");
    return;
  }
  const nome = prompt("Insira o nome do álbum: ")
  const empresa = prompt("Insira a empresa do álbum: ")

  const album = {
    id: id,
    nome: nome,
    empresa: empresa
  };

  albums.push(album)
  console.log(albums)
}

function cadastrarFigurinha(albums, figurinhas) {
  const numero = Number(prompt("Insira o número da figurinha: "))
  const nome = prompt("Insira o nome da figurinha: ")
  const quantidade = Number(prompt("Insira a quantidade dessa figurinha: "))
  const albumId = Number(prompt("Insira o id do álbum: "))
  if (!albums.some(album => album.id === albumId)) {
    console.log("Não é possível cadastrar uma figurinha em um álbum que não existe.");
    return;
  }

  if (figurinhas.some(figurinha => figurinha.numero === numero)) {
    console.log("Não é possível cadastrar duas figurinhas com o mesmo número.");
    return;
  }

  const figurinha = {
    numero: numero,
    nome: nome,
    quantidade: quantidade,
    albumId: albumId
  };

  figurinhas.push(figurinha)
}

function mostrarFigurinha(figurinhas) {
  figurinhas.forEach(figurinha => {
    if (figurinha.quantidade === 0) {
      return;
    }
    else {
        console.log(`Figurinha: ${figurinha.numero}, Nome: ${figurinha.nome}, Quantidade: ${figurinha.quantidade}, Album: ${figurinha.albumId}`);
    }
  });
}

function comprarFigurinha(figurinhas) {  // Não consegui descobrir por que eu não consigo achar nenhuma figurinha nessa função mas eu espero que a lógica esteja certa.
  const numero = Number(prompt("Insira o número da figurinha: "))
  const albumId = Number(prompt("Insira o id do álbum: "))
  const figurinha = figurinhas.find(figurinha => figurinha.numero === numero && figurinha.albumId === albumId)
  console.log(figurinha)
  if (!figurinha) {
    console.log("Não é possível comprar uma figurinha que não existe.");
    return;
  }
  if (figurinha.quantidade === 0) {
    console.log("Não é possível comprar uma figurinha no qual estoque é zero.");
    return;
  }
  figurinha.quantidade--
}

function trocarFigurinha(figurinhas) {
  const numero = Number(prompt("Insira o número da figurinha que vai ser trocada: "))
  const albumId = Number(prompt("Insira o id do álbum da figurinha que vai ser trocada: "))
  const figurinha = figurinhas.find(figurinha => figurinha.numero === numero && figurinha.albumId === albumId)
  if (!figurinha) {
    console.log("Não é possível trocar uma figurinha que não existe.");
    return;
  }
  figurinha.quantidade--
  const novoNumero = Number(prompt("Insira o número da figurinha que vai receber: "))
  const novoAlbumId = Number(prompt("Insira o id do álbum da figurinha que vai receber: "))
  const NovaFigurinha = figurinhas.find(figurinha => figurinha.numero === novoNumero && figurinha.albumId === novoAlbumId)
  NovaFigurinha.quantidade++

  console.log(figurinha)
  console.log(NovaFigurinha)
}

function maiorQuantidade(figurinhas) {
    let maior = 0
    for (let i = 0; i < figurinhas.length; i++) {
        if (figurinhas[i].quantidade > maior) {
            maior = figurinhas[i].quantidade
        }
    }
    console.log("Maior quantidade: " + maior)
}

principal()
