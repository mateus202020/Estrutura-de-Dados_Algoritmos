// ─────────────────────────────────────────────────────────────────────────────
// Pense numa fila de vagões de trem. Cada vagão é um "Nó" (Node).
// Cada vagão sabe quem vem ANTES e quem vem DEPOIS dele.
// ─────────────────────────────────────────────────────────────────────────────

class Node {
    constructor(value) {
        this.value = value;  // O conteúdo do vagão (ex: "Maria", 42, qualquer coisa)
        this.next = null;    // Ponteiro pro vagão SEGUINTE (null = não tem próximo)
        this.prev = null;    // Ponteiro pro vagão ANTERIOR (null = não tem anterior)
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Agora temos o trem inteiro: a "Lista Duplamente Encadeada".
// Ela controla o trem: sabe qual é o primeiro vagão (head),
// o último (tail), e quantos vagões existem (size).
// ─────────────────────────────────────────────────────────────────────────────

export default class DoublyLinkedList {
    constructor() {
        this.head = null;  // Primeiro vagão do trem (começo)
        this.tail = null;  // Último vagão do trem (fim)
        this.size = 0;     // Contador: quantos vagões existem
    }

    // Esvazia o trem completamente — remove todos os vagões
    clear = () => {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Diz quantos vagões tem no trem
    getSize = () => {
        return this.size;
    }

    // Verifica se o trem está vazio (sem vagões)
    isEmpty() {
        if (this.head == null)
            return true;   // Não tem nem o primeiro vagão → trem vazio
        return false;
    }

    // Adiciona um vagão NO FINAL do trem
    addAtEnd = (elem) => {
        const node = new Node(elem);  // Cria um vagão novo com o conteúdo recebido

        if (this.isEmpty()) {
            // Se o trem estava vazio, esse vagão é ao mesmo tempo o primeiro e o último
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        // Liga o novo vagão ao atual último vagão
        node.prev = this.tail;       // O novo vagão aponta para trás (pro antigo último)
        this.tail.next = node;       // O antigo último agora aponta pro novo
        this.tail = node;            // O novo vagão passa a ser o último
        this.size += 1;
    }

    // Adiciona um vagão NO INÍCIO do trem
    AddAStart = (elem) => {
        const node = new Node(elem);

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        // Liga o novo vagão ao atual primeiro vagão
        node.next = this.head;       // O novo vagão aponta para frente (pro antigo primeiro)
        this.head.prev = node;       // O antigo primeiro agora aponta para trás pro novo
        this.head = node;            // O novo vagão passa a ser o primeiro
        this.size += 1;
    }

    // Pega o CONTEÚDO do vagão numa posição específica (0 = primeiro, 1 = segundo, etc.)
    get = (index) => {
        let current = this.getNode(index);  // Encontra o vagão naquela posição
        if (current)
            return current.value;  // Retorna o conteúdo desse vagão
        return null;               // Se não encontrou, retorna null
    }

    // Adiciona um vagão numa posição específica no meio do trem
    addAtPosition = (index, elem) => {
        if (index == 0) {
            this.AddAStart(elem);  // Posição 0 = começo do trem
            return;
        }
        if (!this.get(index) || index == this.getSize()) {
            this.addAtEnd(elem);   // Posição inválida ou final = coloca no fim
            return;
        }

        const node = new Node(elem);
        let current = this.getNode(index - 1);  // Pega o vagão que fica ANTES da posição desejada

        // Religa os vagões ao redor para encaixar o novo no meio
        current.next.prev = node;   // O vagão que estava depois agora aponta para trás pro novo
        node.next = current.next;   // O novo aponta para frente pro que estava depois
        node.prev = current;        // O novo aponta para trás pro que estava antes
        current.next = node;        // O que estava antes agora aponta pro novo
        this.size += 1;
    }

    // Caminha pelo trem até chegar ao vagão na posição desejada
    // (como contar os vagões um a um saindo do começo)
    getNode = (index) => {
        if (index < 0 || index > this.getSize())
            return null;  // Posição inválida

        let current = this.head;    // Começa pelo primeiro vagão
        let currentIndex = 0;

        while (current != null && currentIndex < index) {
            current = current.next;  // Avança para o próximo vagão
            currentIndex++;          // Incrementa o contador de posição
        }

        return current;  // Retorna o vagão encontrado
    }

    // Procura em qual posição está um determinado conteúdo
    // Retorna a posição (0, 1, 2...) ou -1 se não encontrar
    indexOf = (elem) => {
        let current = this.head;  // Começa pelo primeiro vagão
        let index = 0;

        while (current) {
            if (current.value === elem)
                return index;         // Achou! Retorna a posição
            current = current.next;   // Não era esse — vai pro próximo
            index++;
        }

        return -1;  // Percorreu tudo e não encontrou
    };

    // Remove e retorna o PRIMEIRO vagão do trem
    removeHead = () => {
        const node = this.head;          // Guarda o vagão que vai ser removido
        this.head = this.head.next;      // O segundo vagão vira o novo primeiro

        if (this.head == null) {
            this.tail = null;            // Se ficou vazio, o fim também é null
        } else {
            this.head.prev = null;       // O novo primeiro não tem mais ninguém antes dele
        }

        this.size -= 1;
        return node;  // Devolve o vagão removido
    }

    // Remove e retorna o ÚLTIMO vagão do trem
    removeTail = () => {
        const node = this.tail;          // Guarda o vagão que vai ser removido
        this.tail = this.tail.prev;      // O penúltimo vagão vira o novo último

        if (this.tail == null) {
            this.head = null;            // Se ficou vazio, o início também é null
        } else {
            this.tail.next = null;       // O novo último não tem mais ninguém depois dele
        }

        this.size -= 1;
        return node;
    }

    // Remove o vagão numa posição específica e retorna seu conteúdo
    removeAtPosition = (index) => {
        if (this.isEmpty() || !this.get(index)) {
            return null;  // Trem vazio ou posição inválida — não tem o que remover
        }

        if (index === 0)
            return this.removeHead().value;           // Remove o primeiro

        if (index == this.getSize() - 1)
            return this.removeTail().value;           // Remove o último

        // Remove um vagão do meio: religa os vizinhos ignorando ele
        const current = this.getNode(index);
        current.prev.next = current.next;  // O anterior agora aponta pro seguinte
        current.next.prev = current.prev;  // O seguinte agora aponta para trás pro anterior
        this.size -= 1;
        return current.value;
    };

    // Inverte a ordem do trem (o último vira primeiro, e assim por diante)
    reverse = () => {
        const nodeHead = this.head;   // Guarda referência ao início atual
        const nodetail = this.tail;   // Guarda referência ao fim atual

        this.head = nodetail;  // O antigo fim vira o novo início
        this.tail = nodeHead;  // O antigo início vira o novo fim

        let current = nodeHead;
        let aux = null;

        // Percorre todos os vagões trocando os ponteiros "próximo" e "anterior"
        while (current) {
            aux = current.next;       // Guarda temporariamente o próximo
            current.next = current.prev;  // O "próximo" vira "anterior" (inverte)
            current.prev = aux;           // O "anterior" vira o que era o "próximo"
            current = aux;                // Avança para o que antes era o próximo
        }
    }

    // Converte o trem numa lista comum (array) com todos os conteúdos em ordem
    // Ex: ["Maria", "João", "Ana"]
    toArray = () => {
        let current = this.head;  // Começa pelo primeiro vagão
        let vect = [];            // Lista vazia que vai ser preenchida

        while (current) {
            vect.push(current.value);  // Adiciona o conteúdo do vagão à lista
            current = current.next;    // Vai pro próximo vagão
        }

        return vect;  // Retorna a lista completa
    }
}