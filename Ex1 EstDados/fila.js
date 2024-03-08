class No {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }
  
  class Fila {
    constructor() {
      this.noFrente = null;
      this.noFinal = null;
      this.tamanho = 0;
    }
  
    // Adiciona um elemento ao final da fila
    enfileirar(elemento) {
      const novoNo = new No(elemento);
      if (this.estaVazia()) {
        this.noFrente = novoNo;
        this.noFinal = novoNo;
      } else {
        this.noFinal.proximo = novoNo;
        this.noFinal = novoNo;
      }
      this.tamanho++;
    }
  
    // Remove e retorna o elemento do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        return null;
      }
  
      const elementoRemovido = this.noFrente.dado;
      this.noFrente = this.noFrente.proximo;
      this.tamanho--;
  
      if (this.estaVazia()) {
        this.noFinal = null;
      }
  
      return elementoRemovido;
    }
  
    // Retorna o primeiro elemento da fila sem removê-lo
    frente() {
      return this.noFrente ? this.noFrente.dado : null;
    }
  
    // Retorna true se a fila estiver vazia, caso contrário false
    estaVazia() {
      return this.tamanho === 0;
    }
  
    // Retorna o número de elementos na fila
    tamanhoFila() {
      return this.tamanho;
    }
  }
  
  // Exemplo de uso:
  const fila = new Fila();
  fila.enfileirar(1);
  fila.enfileirar(2);
  fila.enfileirar(3);
  
  console.log("Frente da fila:", fila.frente()); // Saída: 1
  console.log("Tamanho da fila:", fila.tamanhoFila()); // Saída: 3
  
  console.log("Removido da fila:", fila.desenfileirar()); // Saída: 1
  
  console.log("Frente da fila após remoção:", fila.frente()); // Saída: 2
  console.log("Tamanho da fila após remoção:", fila.tamanhoFila()); // Saída: 2
  