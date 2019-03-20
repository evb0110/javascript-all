class Node{
  constructor(val){
      this.val = val
      this.next = null;      
      this.prev = null;      
  }
}

class DoublyLinkedList{
  constructor(){
      this.head = this.tail = null;
      this.length = 0;
  }
  push(val){
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = this.tail = newNode;
    } else {
      DoublyLinkedList.connect(this.tail, newNode);
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  static connect(left, right) {
    left.next = right;
    right.prev = left;
  }
}

const dll = new DoublyLinkedList;
dll.push(5);
dll.push(8);
console.log(dll);