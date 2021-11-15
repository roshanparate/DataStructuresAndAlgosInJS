class Stack{
  constructor(){
    this.array = []
  }

  peek(){
    return this.array[this.array.length-1];
  }

  push(inputV){
    this.array.push(inputV);
    return this;
  }

  pop(){
  this.array.pop();
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
