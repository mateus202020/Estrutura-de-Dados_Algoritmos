// Calcula quanto tempo a pessoa na posição k leva para terminar
// de comprar todos os seus ingressos
function timeRequiredToBuy(tickets, k) {

    // Fila que armazenará os índices das pessoas
    let queue = [];

    // Quantidade de pessoas na fila
    let n = tickets.length;

    // Adiciona todas as pessoas na fila
    // Cada pessoa é representada pelo seu índice
    for (let i = 0; i < n; i++) {
        queue.push(i);
    }

    // Contador de tempo
    let time = 0;

    // Processa a fila até a pessoa k terminar
    while (true) {

        // Remove a primeira pessoa da fila
        let i = queue.shift();

        // A pessoa compra 1 ingresso
        tickets[i]--;

        // Cada compra leva 1 segundo
        time++;

        // Se ainda precisa comprar ingressos
        // volta para o final da fila
        if (tickets[i] > 0) {
            queue.push(i);

        // Se terminou de comprar e é a pessoa procurada
        // retorna o tempo total gasto
        } else if (i === k) {
            return time;
        }
    }
}

// Testes
console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));