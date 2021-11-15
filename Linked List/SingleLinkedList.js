class LinkedList {
  constructor(inValue){
    this.head = {
      value : inValue,
      next : null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(inValue){
     const newNode = {
      value : inValue,
      next : null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(inValue){
    this.head = {
      value : inValue,
      next : this.head
    }
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let cuNode = this.head;
    while(cuNode !== null){
      array.push(cuNode.value);
      cuNode = cuNode.next;
    }
    return array;
  }

  insert(index, invalue){

    if(index >= this.length){
      return this.append(invalue)
    }
    if(index <= 0){
      return this.prepend(invalue)
    }

    const newNode = {
      value : invalue,
      next : null
    }

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  remove(index){
    
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse(){
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;
    while(second){
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }

}

const myLinkedList = new LinkedList(10);
myLinkedList.append(12);
myLinkedList.append(14);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0,2);
//myLinkedList.remove(2);
myLinkedList.printList();
myLinkedList.reverse();
