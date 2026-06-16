import doublyLinkedList from "./doubly-linked-list.js";

const list = new doublyLinkedList();

list.addAtEnd(20);
list.addAtEnd(9);
list.addAtEnd(86);
list.addAtEnd(-2);
list.addAtEnd(16);
list.addAtEnd(23);
list.addAtEnd(-4);

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);


console.log("Clar list...")
list.clear();

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);