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

    get = (index) => {
        let current = this.getNode(index);
        if(current)
            return current.value;
        return null;
    }

    addAtPosition = (index, elem) => {
        if(index == 0){
            this.AddAStart(elem);
            return;
        }
        if(!this.get(index) || index == this.getSize()){
            this.addAtEnd(elem);
            return;
        }

        const node = new Node(elem);
        let current = this.getNode(index - 1);
        current.next.prev = node;
        node.next = current.next;
        node.prev = current;
        current.next = node;
        this.size += 1;
    }

    getNode = (index) => {
        if(index < 0 || index > this.getSize())
            return null;
        let current = this.head;
        let currentIndex = 0;
        while(current != null && currentIndex < index){
            current = current.next;
            currentIndex++;
        }
        return current;
    }

    indexOf = (elem) => {
        let current = this.head;
        let index = 0;
        while(current){
            if(current.value === elem)
                return index;
            current = current.next;
            index++
        }
        return -1;
    };

    removeHead = () => {
        const node = this.head;
        this.head = this.head.next;

        if(this.head == null){
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        this.size -= 1;
        return node;
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