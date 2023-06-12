// FOR

for (inicialização; condição; incremento) {
    // bloco de código a ser executado
 }

 // Aqui está o significado de cada parte:

// A "inicialização" é executada uma vez no início do loop e geralmente é usada para definir uma variável de contador.
// A "condição" é verificada no início de cada iteração do loop. Se a condição for verdadeira, o bloco de código dentro do loop será executado. Caso contrário, o loop será encerrado.
// O "incremento" é executado após cada iteração do loop. Geralmente, é usado para atualizar o contador.

for (let i = 0; i < 5; i++) {
    console.log("O valor de i é: " + i);
}

const vetor = [1, 2, 3, 4, 5];
for (let i = 0; i < vetor.length; i++) {
   console.log(vetor[i]);
}

// WHILE

while (condição) {
    // bloco de código a ser executado
}

// Aqui está o significado de cada parte:

// A "condição" é verificada antes de cada iteração do loop.
// Se a condição for verdadeira, o bloco de código dentro do loop será executado. Caso contrário, o loop será encerrado.

let i = 0;
while (i < 5) {
   console.log("O valor de i é: " + i);
   i++;
}

const vetorWhile = [1, 2, 3, 4, 5];
let p = 0;
while (p < vetorWhile.length) {
   console.log(vetorWhile[p]);
   p++;
}

// DO WHILE

// O loop "do-while" é semelhante ao loop "while", mas com uma diferença crucial: o bloco de código é executado pelo menos uma vez, independentemente da condição.
// Após a primeira execução, a condição é verificada, e se for verdadeira, o loop continuará executando. Caso contrário, o loop será encerrado.

do {
    // bloco de código a ser executado
} while (condição);

// Aqui está o significado de cada parte:

//O bloco de código é executado primeiro.
//A "condição" é verificada após a execução do bloco de código. Se a condição for verdadeira, o loop continuará executando. Caso contrário, o loop será encerrado.


let J = 0;
do {
   console.log("O valor de J é: " + J);
   J++;
} while (J < 5);

// Qual é a diferença entre o loop "do-while" e o loop "while"?
// Resposta: A principal diferença é que o bloco de código do loop "do-while" é executado pelo menos uma vez, independentemente da condição, enquanto o loop "while" verifica a condição antes da primeira execução do bloco de código.

// Como podemos usar o loop "do-while" para repetir uma ação até que uma condição seja atendida?
// Resposta: Podemos usar o loop "do-while" quando queremos garantir que o bloco de código seja executado pelo menos uma vez. A condição é verificada após a primeira execução do bloco.
// Exemplo:

let senha;
do {
   senha = prompt("Digite a senha:");
} while (senha !== "1234");

// O loop "do-while" vai rodar pelo menos uma vez e terminar quando a senha for diferente de "1234"

// INCLUDES

// includes: O método includes verifica se um elemento específico está presente em um vetor. 
// Ele retorna um valor booleano (true ou false) indicando se o elemento foi encontrado ou não.

const vetor1 = [1, 2, 3, 4, 5];
const elemento = 3;
if (vetor.includes(elemento)) {
   console.log("O elemento " + elemento + " está presente no vetor.");
} else {
   console.log("O elemento " + elemento + " não está presente no vetor.");
}

// INDEXOF

// indexOf: O método indexOf retorna o índice da primeira ocorrência de um elemento em um vetor. Se o elemento não for encontrado, ele retorna -1.

const vetor2 = [1, 2, 3, 4, 5];
const elemento1 = 3;
const indice = vetor.indexOf(elemento);
if (indice !== -1) {
   console.log("O elemento " + elemento + " está no índice " + indice + " do vetor.");
} else {
   console.log("O elemento " + elemento + " não está presente no vetor.");
}

// Neste exemplo, o método indexOf é usado para encontrar o índice da primeira ocorrência do valor 3 no vetor.
// Se o elemento for encontrado, uma mensagem é exibida com o índice correspondente. Caso contrário, uma mensagem informando que o elemento não está presente é exibida.

// FUNÇÃO

// as funções são blocos de código reutilizáveis que podem ser chamados para executar uma ação específica. 
// Elas ajudam a organizar e modularizar o código, permitindo que trechos de lógica sejam encapsulados em uma unidade independente.

// Declaração de função: As funções podem ser declaradas usando a palavra-chave function, seguida pelo nome da função e parênteses que podem conter parâmetros de entrada, se houver. O bloco de código da função é definido entre chaves {}.

function nomeDaFuncao(parametro1, parametro2) {
    // bloco de código
}

// As funções desempenham um papel fundamental na programação JavaScript, permitindo a modularização, a reutilização de código e o gerenciamento da lógica do programa.
// Elas podem ser usadas para realizar cálculos, manipular dados, interagir com o usuário, etc.


// A estrutura de programação refere-se à organização e ao fluxo lógico do código em um programa. Ela ajuda a garantir que o código seja legível, compreensível e eficiente.

// Exercício que o Daniel falou que vai cair na prova (ou um parecido)

function exAula(){
    let codigos = []; let nomes = []

    for(let i = 0; i <= 2; i++){
        let auxiliar = Number(prompt(`Informe o codigo do aluno: `))
        while(codigos.includes(auxiliar)){
            auxiliar = Number(prompt(`Código ja existe, insira um diferente. \n`))
        }
        codigos[i] = auxiliar
        nomes[i] = prompt(`Informe o nome do aluno: `)
    }
  // peça ao usuario para entrar com o código do aluno
  // mostrar o nome do aluno caso seja um codigo cadastrado
    let codigo = Number(prompt(`Informe um código: `))
    let posicao = codigos.indexOf(codigo)
    if(posicao == -1){
        alert(`Código não esta presente no vetor`)
    }
    else{
        alert(`Nome do aluno é ${nomes[posicao]}`)
    }
}