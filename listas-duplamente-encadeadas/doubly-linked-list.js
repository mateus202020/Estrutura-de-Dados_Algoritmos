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

}