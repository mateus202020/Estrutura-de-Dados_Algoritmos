import Stack1 from "./stack1.js";

// Verifica se os parênteses estão balanceados
function isBalanced(text){

    // O array será usado como pilha
    let stack = [];

    // Percorre todos os caracteres da string
    for(let char of text){

        // Quando encontrar "(" adiciona ao final do array
        if(char === "("){
            stack.push(char)

        // Quando encontrar ")" remove o último "("
        }else if (char === ")"){

            // Se o array estiver vazio significa que não existe
            // um "(" correspondente para esse ")"
            if(stack.length === 0){
                return false;
            }

            // Remove o último elemento da pilha
            stack.pop();
        }
    }

    // Se o array estiver vazio todos os parênteses foram fechados corretamente
    return stack.length === 0;
}

// Testes
console.log(isBalanced("(())()")); // true
console.log(isBalanced("())("));   // false