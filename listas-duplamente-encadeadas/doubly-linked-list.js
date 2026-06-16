class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    clear = () => {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize = () => {
        return this.size;
    }

    isEmpty(){
        if(this.head == null)
            return true;
        return false;
    }

    addAtEnd = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.size += 1;
    }

    AddAStart = (elem) => {
        const node = new Node(elem);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
            this.size += 1;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.size += 1;
    }

    toArray = () => {
        let current = this.head;
        let vect = [];

        while(current){
            vect.push(current.value);
            current = current.next;
        }

        return vect;
    }
}