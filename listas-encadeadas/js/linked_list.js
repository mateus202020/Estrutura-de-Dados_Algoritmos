// Representa um nó da lista encadeada
export class Node {
    constructor(value){
        this.value = value; // Valor armazenado dentro do nó
        this.next = null;   // Referência para o próximo nó da lista
    }
}


// Representa a lista encadeada
export default class LinkedList {
    constructor(){
        this.head = null // Primeiro nó da lista
        this.size = 0   // Quantidade de elementos na lista
    }

    // Limpa toda a lista
    clear = () => {
        this.head = null;
        this.size = 0;
    }

    // Verifica se a lista está vazia
    isEmpty = () => {
        if(this.head == null)
            return true;
        return false
    }

    // Retorna o tamanho da lista
    getSize = () => {
        return this.size;
    }

    // Adiciona um elemento no início da lista
    addAtStart = (elem) => {
        const node = new Node(elem); // Cria um novo nó

        // Se a lista estiver vazia, o novo nó vira o primeiro
        if(this.isEmpty()){
            this.head = node;
            this.size = this.size + 1;
            return;
        }

        const aux = this.head; // Guarda o antigo primeiro nó
        this.head = node;      // O novo nó passa a ser o primeiro
        node.next = aux;       // O novo nó aponta para o antigo primeiro
        this.size = this.size + 1
    }

    // Adiciona um elemento no final da lista
    addAtEnd = (elem) => {
        const node = new Node(elem); // Cria um novo nó

        // Se a lista estiver vazia, o novo nó vira o primeiro
        if(this.head == null){
            this.head = node;
            this.size = this.size + 1;
            return;
        }

        let current = this.head; // Começa pelo primeiro nó

        // Percorre a lista até encontrar o último nó
        while(current.next){
            current = current.next;
        }

        current.next = node // O último nó aponta para o novo nó
        this.size = this.size + 1
    };

    // Adiciona um elemento em uma posição específica
    addAtPosition = (index, elem) => {
        // Se o índice for 0, adiciona no início
        if(index == 0){
            this.addAtStart(elem);
            return;
        }

        // Se a posição não existir, adiciona no final
        if(!this.get(index)){
            this.addAtEnd(elem);
            return;
        }

        const node = new Node(elem);      // Cria um novo nó
        let aux = this.getNode(index - 1); // Pega o nó anterior à posição desejada

        node.next = aux.next; // O novo nó aponta para o nó que estava na posição
        aux.next = node;      // O nó anterior aponta para o novo nó

        this.size = this.size + 1;
    }

    // Retorna o valor de uma posição da lista
    get = (index) => {
        let current = this.getNode(index); // Busca o nó pelo índice

        if(current){
            return current.value; // Retorna apenas o valor do nó
        }

        return null;
    }

    // Retorna o nó completo de uma posição da lista
    getNode = (index) => {
        // Verifica se o índice é inválido
        if(index < 0 || index >= this.getSize() || index === undefined){
            return null;
        }

        let current = this.head; // Começa pelo primeiro nó
        let i = 0;

        // Percorre a lista até chegar no índice desejado
        while(i !== index){
            current = current.next;
            i++;
        }

        return current; // Retorna o nó encontrado
    }

    // Verifica se um elemento existe na lista
    contains = (elem) => {
        let indexElem = this.indexOf(elem); // Busca o índice do elemento

        if(indexElem != -1){
            return true;
        }

        return false;
    }

    // Retorna o índice de um elemento na lista
    indexOf = (elem) => {
        let current = this.head; // Começa pelo primeiro nó
        let i = 0;

        // Percorre todos os nós da lista
        while(current){
            // Se encontrar o valor, retorna o índice
            if(current.value == elem)
                return i;

            current = current.next;
            i++
        }

        return -1; // Retorna -1 caso não encontre
    }

    // Remove um elemento de uma posição específica
    removeAtPosition = (index) => {
        // Se a lista estiver vazia ou a posição não existir, retorna null
        if(this.isEmpty() || !this.get(index)) {
            return null;
        }

        let item = null;
        let aux = null;

        // Remove o primeiro elemento da lista
        if (index == 0) {
            item = this.head.value;   // Guarda o valor removido
            this.head = this.head.next; // O próximo nó vira o primeiro
            this.size--;
            return item;
        }
        
        // Remove o último elemento da lista
        if(index == this.getSize() -1){
            item = this.get(index);      // Guarda o valor removido
            aux = this.getNode(index - 1); // Pega o penúltimo nó

            aux.next = null; // O penúltimo nó deixa de apontar para o último

            this.size = this.size - 1;
            return item;
        }

        // Remove um elemento do meio da lista
        aux = this.getNode(index - 1); // Pega o nó anterior ao que será removido
        item = aux.next.value;         // Guarda o valor que será removido

        aux.next = (aux.next).next; // Faz o nó anterior apontar para o próximo do removido

        this.size = this.size - 1
        return item;
    }

    // Remove um elemento pelo valor
    remove = (elem) => {
        let index = this.indexOf(elem); // Busca o índice do elemento

        // Se a lista estiver vazia ou o elemento não existir, retorna false
        if(this.isEmpty() || index == -1){
            return false;
        }

        this.removeAtPosition(index) // Remove o elemento pela posição
        return true
    }

    // Imprime todos os valores da lista no console
    printLinkedList = () => {
        let current = this.head

        // Percorre a lista imprimindo cada valor
        while(current != null){
            console.log(current.value)
            current = current.next
        }
    }
    
    // Converte a lista encadeada em um array
    toArray = () => {
        let current = this.head;
        let vect = [];

        // Percorre a lista adicionando os valores no array
        while(current){
            vect.push(current.value);
            current = current.next;
        }

        return vect;
    }
}