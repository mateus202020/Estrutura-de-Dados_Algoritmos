import Stack1 from "./stack1.js";

const stack1 = new Stack1(10);



console.log("stack.isEmpty(): ", stack1.isEmpty()); 
console.log("stack.count(): ", stack1.count())

stack1.push("João");
stack1.push("Maria");
stack1.push("José");

console.log("stack.isEmpty(): ", stack1.isEmpty()); 
console.log("stack.count(): ", stack1.count())
console.log("stack.peek()", stack1.peek())

console.log("items:"); 




// Enquanto a pilha não estiver vazia
while (!stack1.isEmpty()) {

    // Remove o elemento do topo
    const item = stack1.pop();

    // Exibe o elemento removido
    console.log(item);
}
