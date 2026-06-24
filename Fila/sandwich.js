function countStudents(students, sandwiches) {

    // Cria uma cópia do array de estudantes para simular uma fila.
    // Assim não alteramos o array original.
    let queue = students.slice();

    // Percorre cada sanduíche da pilha.
    for (let sandwich of sandwiches) {

        // Indica se algum estudante conseguiu pegar o sanduíche atual.
        let eat = false;

        // Guarda quantos estudantes ainda podem tentar pegar esse sanduíche.
        let count = queue.length;

        // Continua enquanto ninguém pegou o sanduíche
        // e ainda existem estudantes para tentar.
        while (!eat && count > 0) {

            // Remove o primeiro estudante da fila.
            let student = queue.shift();

            // Verifica se o estudante gosta do sanduíche atual.
            if (student === sandwich) {

                // O estudante pega o sanduíche e sai da fila.
                eat = true;

            } else {

                // O estudante não quer esse sanduíche,
                // então vai para o final da fila.
                queue.push(student);

                // Diminui a quantidade de tentativas restantes.
                count--;
            }
        }

        // Se todos os estudantes da fila tentaram
        // e ninguém quis o sanduíche atual,
        // significa que não será possível continuar.
        if (count === 0) {
            return queue.length;
        }
    }

    // Se todos os sanduíches foram distribuídos,
    // nenhum estudante ficou sem comer.
    return 0;
}

// Exemplo 1
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));

// Exemplo 2
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));