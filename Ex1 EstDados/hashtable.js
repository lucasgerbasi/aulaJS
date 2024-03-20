function HashTable() {
    var table = []; // Vetor que armazenará as listas encadeadas

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;
        this.toString = function() {
            return '[' + this.key + ' - ' + this.value + ']';
        };
    };

    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        if (table[position] === undefined) { // Se não houver colisão
            table[position] = new LinkedList();
        }
        table[position].append(new ValuePair(key, value)); // Adiciona à lista encadeada
    };

    this.remove = function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if (table[position].isEmpty()) {
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            // Verifica se o elemento a ser removido é o último da lista
            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false; // Elemento não encontrado ou tabela vazia na posição
    };

    this.get = function(key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            // Verifica se o elemento está no último nó da lista
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined; // Elemento não encontrado ou tabela vazia na posição
    };

    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.print = function() {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log('Posição ' + i + ':');
                console.log(table[i].toString());
            }
        }
    };

    this.size = function() {
        var count = 0;
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                count++;
            }
        }
        return count;
    };
}

// Implementação da lista encadeada para tratar colisões
function LinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    var length = 0;
    var head = null;

    this.append = function(element) {
        var node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length++;
    };

    this.remove = function(element) {
        var current = head,
            previous;

        if (current.element === element) {
            head = current.next;
        } else {
            while (current.element !== element) {
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        length--;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.size = function() {
        return length;
    };

    this.getHead = function() {
        return head;
    };

    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string += current.element.toString() + ' ';
            current = current.next;
        }

        return string;
    };
}

// Criar uma nova tabela de hash
var hashtable = new HashTable();

// Inserir alguns valores
hashtable.put('Astolfo', 'astolfo@uol.com.br');
hashtable.put('Livia', 'livia@uol.com.br');
hashtable.put('Leandro', 'leandro.borges@me.com');

// Recuperar valores inseridos
console.log('Email de Leandro:', hashtable.get('Leandro')); // Saída: leandro.borges@me.com
console.log('Email de Livia:', hashtable.get('Livia')); // Saída: livia@uol.com.br
console.log('------------------------')

// Remover um valor existente
console.log('Removendo Leandro:', hashtable.remove('Leandro')); // Saída: true
console.log('------------------------')

// Tentar recuperar o valor removido
console.log('Email de Leandro após remoção:', hashtable.get('Leandro')); // Saída: undefined
console.log('------------------------')

// Tentar remover um valor inexistente
console.log('Removendo Pedro:', hashtable.remove('Pedro')); // Saída: false
console.log('------------------------')

// Imprimir a tabela de hash
console.log('Tabela de hash completa:');
hashtable.print();

