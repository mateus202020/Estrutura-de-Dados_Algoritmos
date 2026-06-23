import Stack1 from "./stack1.js";

// Verifica se os parênteses de uma expressão estão balanceados
function isBalanced(text){

    // Cria uma pilha para armazenar os parênteses de abertura
    let stack = new Stack1();

    // Percorre cada caractere da string
    for(let char of text){

        // Se encontrar um "(" empilha
        if(char === "("){
            stack.push(char)

        // Se encontrar um ")" tenta desempilhar
        }else if (char === ")"){

            // Se a pilha estiver vazia significa que existe
            // um ")" sem um "(" correspondente
            if(stack.isEmpty()){
                return false;
            }

            // Remove o último "(" encontrado
            stack.pop();
        }
    }

    // Ao final, a pilha deve estar vazia.
    // Caso contrário existem "(" sem fechamento.
    return stack.isEmpty()
}

// Testes
console.log(isBalanced("(())()")); // true
console.log(isBalanced("())("));   // false