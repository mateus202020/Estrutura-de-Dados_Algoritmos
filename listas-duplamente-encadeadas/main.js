import doublyLinkedList from "./doubly-linked-list.js";

const list = new doublyLinkedList();

list.addAtEnd(20);
list.addAtEnd(9);
list.addAtEnd(86);
list.addAtEnd(-2);
list.addAtEnd(16);


/*
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);


console.log("Clar list...")
list.clear();

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);
*/

console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

list.AddAStart(23);
console.log(list.toArray());
console.log(`Tamanho da lista: ${list.getSize()}`);

list.addAtPosition(2, 54);
console.log(list.toArray());

list.addAtPosition(7, 100);
console.log(list.toArray());