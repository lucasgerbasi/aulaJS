// - Vetor de Objetos
// - Modularização + Parâmetros 
// - Filter, Find, Some
// - APIs

// Vetor de Objetos (Array of Objects)
// Introdução:
// Um vetor de objetos é uma estrutura de dados que armazena
// uma coleção de objetos em JavaScript.
// Isso é útil quando você precisa representar uma lista de elementos,
// cada um deles com várias propriedades. 
// Vamos criar um exemplo simples usando um vetor de objetos para representar pessoas.

// Exemplo de um vetor de objetos
const pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 35 }
];


// Acesso e Manipulação:
// Você pode acessar elementos do vetor de objetos usando índices, da mesma forma que faria com um vetor normal. Por exemplo:

console.log(pessoas[0]); // Acessa o primeiro objeto { nome: "João", idade: 30 }

// Você também pode adicionar, remover e modificar objetos em um vetor de objetos usando métodos como push, pop, splice, etc.

// Adicionando um novo objeto
pessoas.push({ nome: "Ana", idade: 28 });

// Removendo um objeto
pessoas.splice(1, 1); // Remove o objeto na posição 1

// Modificando um objeto
pessoas[0].idade = 31;

// Modularização + Parâmetros
// Modularização:
// A modularização é uma prática importante em JavaScript para organizar seu código em módulos reutilizáveis.
// Isso ajuda a manter seu código mais limpo e legível.
// Vamos criar um exemplo simples de como criar e exportar um módulo em JavaScript.

// Módulo 'utils.js'
export function soma(a, b) {
    return a + b;
}

// Em outro arquivo
import { soma } from './utils.js';
console.log(soma(5, 3)); // Resultado: 8

// Parâmetros de Função:
// Em JavaScript, as funções podem receber parâmetros que permitem que você passe valores para dentro da função. Por exemplo:

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
  
saudacao("Alice"); // Resultado: Olá, Alice!

// Filter, Find, Some

// Filter:
// O método filter é usado para criar um novo vetor contendo todos os elementos que atendem a determinada condição.
// Vamos usar o exemplo de um vetor de objetos para filtrar pessoas com idade acima de 30 anos.

const pessoasAcimaDe30 = pessoas.filter(pessoa => pessoa.idade > 30);

// Find:
// O método find é usado para encontrar o primeiro elemento que atende a uma determinada condição.
// Por exemplo, encontrar uma pessoa com nome "Pedro".
 
const pessoaPedro = pessoas.find(pessoa => pessoa.nome === "Pedro");

// Some:
// O método some verifica se pelo menos um elemento em um vetor atende a uma determinada condição.
// Por exemplo, verificar se existe alguém com idade menor que 25 anos. O resultado seria True ou False.

const alguemComMenosDe25 = pessoas.some(pessoa => pessoa.idade < 25);

// APIs
// Introdução:
// APIs (Application Programming Interfaces) são conjuntos de regras e protocolos que permitem que diferentes programas se comuniquem entre si.
// Em JavaScript, você pode usar APIs para interagir com serviços externos, como fazer solicitações HTTP para um servidor web ou acessar recursos do navegador.

// Exemplo de API Fetch:
// O método fetch é usado para fazer solicitações HTTP e obter dados de um servidor web.
// Aqui está um exemplo de como fazer uma solicitação GET para uma API fictícia e processar a resposta:

let resposta = await fetch(`http://www.omdbapi.com/?t=${titulo}&apikey=${chave}`)

// PERGUNTAS:
// O que é um vetor de objetos em JavaScript?

// Resposta: Um vetor de objetos é uma estrutura de dados que armazena uma coleção de objetos em JavaScript.

// Como você acessaria o terceiro objeto em um vetor de objetos chamado pessoas?

// Resposta: Você pode acessar o terceiro objeto usando pessoas[2], pois os índices de um vetor em JavaScript começam em 0.

// Explique o conceito de modularização em JavaScript e como você pode exportar uma função de um módulo para outro arquivo.

// Resposta: Modularização é a prática de dividir o código em módulos reutilizáveis. Para exportar uma função de um módulo, você usa export e a importa em outro arquivo usando import.

// Qual método de vetor você usaria para criar um novo vetor contendo todos os elementos que atendem a uma determinada condição?

// Resposta: O método que você usaria é filter.
