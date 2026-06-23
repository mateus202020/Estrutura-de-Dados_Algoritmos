// Verifica se os símbolos (), {} e [] estão balanceados
function validParentheses(text){

    // Array utilizado como pilha
    let stack = [];

    // Percorre cada caractere da string
    for(let c of text){

        // Quando encontra "(" empilha o símbolo esperado para fechamento
        if(c === "("){
            stack.push(")");

        // Quando encontra "{", empilha o fechamento esperado
        }else if (c === "{"){
            stack.push("}");

        // Quando encontra "[", empilha o fechamento esperado
        }else if (c === "["){
            stack.push("]");
        }

        // Se não for um símbolo de abertura, deve ser um fechamento
        else if (stack.length === 0 || stack.pop() !== c){

            // Retorna false se:
            // - A pilha estiver vazia
            // - O símbolo esperado for diferente do encontrado
            return false;
        }
    }

    // No final, a pilha deve estar vazia
    // Caso contrário existem símbolos sem fechamento
    return stack.length === 0;
}

// Testes
console.log(validParentheses("()([]{})")) // true
console.log(validParentheses("(){]{}"))   // false