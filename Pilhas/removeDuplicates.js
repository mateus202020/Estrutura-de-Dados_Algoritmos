// Remove caracteres duplicados que estão lado a lado
function removeDuplicates(text){

    // Array utilizado como pilha
    let stack = []

    // Percorre cada caractere da string
    for(let char of text){

        // Verifica se existe elemento na pilha
        // e se o topo da pilha é igual ao caractere atual
        if(stack.length !== 0 && stack[stack.length - 1] === char){
            // Remove o caractere duplicado
            stack.pop();

        }else {

            // Adiciona o caractere na pilha
            stack.push(char);
        }
    }

    // Junta todos os caracteres restantes em uma string
    return stack.join("");

   
}

console.log(removeDuplicates("abbaca"))
console.log(removeDuplicates("azxxzy"))



