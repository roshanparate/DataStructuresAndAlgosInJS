class Node{
  constructor(inValue){
    this.value = inValue;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    return this.first;
  }

  enqueue(inputV){
    const newNode = new Node(inputV);
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue(){
    if(!this.first){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

}

const myQueue = new Queue();
myQueue.enqueue('Roshan');
myQueue.enqueue('John');
myQueue.enqueue('Mira');
myQueue.enqueue('Sameer');
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
//myQueue.dequeue();
//myQueue.dequeue();