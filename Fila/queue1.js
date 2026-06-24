// Implementação de uma Fila (Queue) utilizando um Array
export default class Queue1 {

    // Cria uma fila vazia
    constructor() {
        this.list = [];
    }

    // Verifica se a fila está vazia
    isEmpty() {
        return this.list.length === 0;
    }

    // Adiciona um elemento no final da fila
    add(item) {
        this.list.push(item);
    }

    // Remove o primeiro elemento da fila
    remove() {

        // Não permite remover de uma fila vazia
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        // Remove e retorna o primeiro elemento
        return this.list.shift();
    }

    // Retorna o primeiro elemento da fila sem removê-lo
    peek() {

        // Não permite consultar uma fila vazia
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        // Retorna o primeiro elemento
        return this.list[0];
    }

    // Retorna a quantidade de elementos da fila
    count() {
        return this.list.length;
    }
}