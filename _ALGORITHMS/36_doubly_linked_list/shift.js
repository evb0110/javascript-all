class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return;
    const returned = this.head;
    if (this.length === 1) {
      this.head = this.tail;
      this.head.prev = this.tail.prev = this.tail.next = this.head.next = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    returned.prev = returned.next = null;
    this.length--;
    return returned;

  }
}

const dll = new DoublyLinkedList;
dll.push(1);
dll.push(2);
dll.push(3);
const result = dll.shift();
console.log(result);
console.log(dll);