export default class Stack2 {

    // Construtor da pilha
    constructor() {

        // Array que armazenará os elementos
        this.list = [];
    }

    // Verifica se a pilha está vazia
    isEmpty() {

        // Se o tamanho do array for 0,
        // significa que não há elementos
        return this.list.length === 0;
    }

    // Adiciona um elemento no topo da pilha
    push(item) {

        // O método push adiciona o elemento
        // no final do array
        this.list.push(item);
    }

    // Remove o elemento do topo da pilha
    pop() {

        // Não é possível remover elementos
        // de uma pilha vazia
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        // Remove e retorna o último elemento
        return this.list.pop();
    }

    // Retorna o elemento do topo
    // sem removê-lo
    peek() {

        // Não é possível consultar o topo
        // se a pilha estiver vazia
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        // Retorna o último elemento do array
        return this.list[this.list.length - 1];
    }

    // Retorna a quantidade de elementos
    // armazenados na pilha
    count() {

        return this.list.length;
    }

    // Remove todos os elementos da pilha
    clear() {

        // Cria um novo array vazio
        this.list = [];
    }
}