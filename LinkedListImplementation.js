

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
    this.printLL();
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printLL();
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printLL();
  }
  printLL(){
      const array = [];
      let currNode = this.head;
      while(currNode !== null) {
          array.push(currNode.value);
          currNode = currNode.next;
      }
      console.log("array" , array)
      return array;
  }
  insert(index, value) {
      if (index === 0) {
          return this.prepend(value);
      }
      if (index === this.length) {
          return this.append(value);
      }
      if (index > this.length) {
          return console.log("oops")
      }
      let currentNode = this.head;
      let indexFinder = 1
      while(currentNode.next !== null) {
          if(indexFinder === index) {
              const newNode = {
              value: value,
              next: null
            }
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length++;
            return this.printLL();
          }
          currentNode = currentNode.next;
          indexFinder++;
      }
  }
  remove(index) {
      if(index === 0) {
          this.head = this.head.next;
          return this.printLL();
      }
      if(index > this.length-1) {
          return console.log("oops");
      }
      let currentNode = this.head;
      let prevNode = {
          value: null,
          next: null
      }
      let indexFinder = 0;
      while(indexFinder < this.length) {
          if(indexFinder === index) {
            prevNode.next = currentNode.next;
            if (index === this.length-1) {
                this.tail = prevNode;
            }
            this.length--;
            return this.printLL();
          }
          prevNode = currentNode;
          currentNode = currentNode.next;
          indexFinder++;
          
      }
  }
}

let myLinkedList = new LinkedList(10);
console.log("--------------");
myLinkedList.append(5);
console.log("--------------");
myLinkedList.append(16);
console.log("--------------");
myLinkedList.prepend(1);
console.log("--------------");
myLinkedList.insert(3, 7);
console.log("--------------");
myLinkedList.insert(8, 15);
// console.log(myLinkedList.length)
console.log("--------------");
myLinkedList.remove(7);
console.log("--------------");
console.log(myLinkedList.length)
myLinkedList.remove(2);
console.log("--------------");
myLinkedList.remove(3);
console.log("--------------");




