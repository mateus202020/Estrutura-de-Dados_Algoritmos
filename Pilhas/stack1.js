export default class Stack1 {

    // Construtor da pilha
    constructor(size = 100) {

        // Define a capacidade máxima da pilha
        this.size = size;

        // Cria um array com o tamanho informado
        this.arr = new Array(size);

        // Controla a posição do topo da pilha
        // -1 significa que a pilha está vazia
        this.top = -1;
    }

    // Adiciona um novo elemento no topo da pilha
    push(item) {
        if(this.isFull()){
            throw new Error("Stack is full");
        }

        // Move o topo para a próxima posição
        this.top++;

        // Armazena o item na posição atual do topo
        this.arr[this.top] = item;
    }

    // Remove o elemento que está no topo
    pop() {

        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }

        // Obtém o elemento atual do topo
        const item = this.arr[this.top];

        // Move o topo uma posição para baixo
        this.top--;

        // Retorna o elemento removido
        return item;
    }

    // Verifica se a pilha está vazia
    isEmpty() {

        // Se o topo for -1, não existe nenhum elemento
        return this.top === -1;
    }

        // Verifica se a pilha está cheia
    isFull(){

        // O topo estará na última posição válida do array
        // Exemplo:
        // size = 10
        // última posição = 9
        return this.top === this.size - 1;
    }

    // Retorna a quantidade de elementos armazenados na pilha
    count(){

        // Como o topo começa em -1,
        // a quantidade de elementos sempre será top + 1
        //
        // Exemplo:
        // top = -1 → 0 elementos
        // top = 0  → 1 elemento
        // top = 1  → 2 elementos
        return this.top + 1;
    }

    // Retorna o elemento que está no topo da pilha
    // sem removê-lo
    peek(){

        // Não é possível visualizar o topo
        // se a pilha estiver vazia
        if(this.isEmpty()){
            throw new Error("Stack is empty");
        }

        // Retorna o elemento atual do topo
        // sem alterar a estrutura da pilha
        return this.arr[this.top];
    }

    clear(){
        this.top = -1;
    }
}