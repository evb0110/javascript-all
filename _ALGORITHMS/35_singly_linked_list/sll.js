class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    const node = new Node(val);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    this.length++;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) {
      return;
    } else {
      let current = this.head;
      let next = current.next;
      while (true) {
        if (next === this.tail) {
          this.tail = current;
          this.tail.next = null;
          this.length--;
          return next;
        }
        current = next;
        next = current.next;
      }
    }
  }
}

const sll = new SLL;
sll.push('Hello');
console.log(sll);
sll.push('World');
console.log(sll);
sll.push('!');
console.log(sll);

console.log('popped: ', sll.pop());
sll.traverse();