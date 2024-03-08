// Classe No representa um nó da lista encadeada
class No {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Classe Pilha representa uma pilha utilizando uma lista encadeada
  class Pilha {
    constructor() {
      this.cabeca = null;
      this.tamanho = 0;
    }
  
    // Insere um elemento no topo da pilha
    push(elemento) {
      const novoNo = new No(elemento);
      novoNo.next = this.cabeca;
      this.cabeca = novoNo;
      this.tamanho++;
    }
  
    // Remove e retorna o elemento do topo da pilha
    pop() {
      if (this.estaVazio()) {
        return null;
      }
  
      const elementoRemovido = this.cabeca.data;
      this.cabeca = this.cabeca.next;
      this.tamanho--;
      return elementoRemovido;
    }
  
    // Retorna o elemento no topo da pilha sem removê-lo
    visualizar() {
      return this.estaVazio() ? null : this.cabeca.data;
    }
  
    // Retorna true se a pilha estiver vazia, caso contrário false
    estaVazio() {
      return this.tamanho === 0;
    }
  
    // Retorna o número de elementos na pilha
    tamanho() {
      return this.tamanho;
    }
  }
  
  
  // Exemplo de uso:
  const pilha = new Pilha();
  
  console.log("Está vazia? " + pilha.estaVazio()); // true
  
  pilha.push(10);
  pilha.push(20);
  pilha.push(30);
  
  console.log("Cabeça da pilha: " + pilha.visualizar()); // 30
  console.log("Tamanho da pilha: " + pilha.tamanho()); // 3
  
  console.log("Removendo elemento: " + pilha.pop()); // 30
  console.log("Tamanho da pilha: " + pilha.tamanho()); // 2
  console.log("Está vazia? " + pilha.estaVazio()); // false
  