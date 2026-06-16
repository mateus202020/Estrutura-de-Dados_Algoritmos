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
}