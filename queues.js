class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    dequeue(){
        if(this.size === 0) return false;
        let dequeuedNode = this.first;
        let newFirst = this.first.next;
        if(!newFirst){
            this.last = newFirst;
        }
        this.first = newFirst;
        dequeuedNode.next = null;
        this.size--;
        return dequeuedNode.value;
    }

    peek(){
        if(this.size === 0) return;
        return this.first.value;
    }
}
