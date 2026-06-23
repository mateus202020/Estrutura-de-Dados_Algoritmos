import Stack2 from "./stack2.js"

const stack2 = new Stack2(10);


console.log("stack.isEmpty(): ", stack2.isEmpty()); 
console.log("stack.count(): ", stack2.count())

stack2.push("João");
stack2.push("Maria");
stack2.push("José");

console.log("stack.isEmpty(): ", stack2.isEmpty()); 
console.log("stack.count(): ", stack2.count())
console.log("stack.peek()", stack2.peek())

console.log("items:"); 


// Enquanto a pilha não estiver vazia
while (!stack2.isEmpty()) {

    // Remove o elemento do topo
    const item = stack2.pop();

    // Exibe o elemento removido
    console.log(item);
}
