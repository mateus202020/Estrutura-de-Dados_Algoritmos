import Queue1 from "./queue1.js";

// Cria uma nova fila
const queue = new Queue1();

// Exibe a quantidade inicial de elementos
console.log("queue.count():", queue.count());

// Verifica se a fila está vazia
console.log("queue.isEmpty():", queue.isEmpty());

// Adiciona elementos ao final da fila
queue.add("Maria");
queue.add("Joao");
queue.add("Ana");

console.log("Adicionados: Maria, Joao, Ana");

// Exibe a quantidade atual de elementos
console.log("queue.count():", queue.count());

// Verifica novamente se a fila está vazia
console.log("queue.isEmpty():", queue.isEmpty());

// Exibe o primeiro elemento sem removê-lo
console.log("queue.peek():", queue.peek());

console.log("Itens:");

// Remove os elementos da fila até ela ficar vazia
while (!queue.isEmpty()) {
    console.log(queue.remove());
}