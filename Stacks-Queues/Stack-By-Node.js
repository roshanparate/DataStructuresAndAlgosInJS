class Node{
  constructor(inValue){
    this.value = inValue;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(inputV){
    const newNode = new Node(inputV);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }
    else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.top){
      return null;
    }
    if(this.top === this.bottom){
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();