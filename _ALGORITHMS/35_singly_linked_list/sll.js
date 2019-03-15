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
    } else if (this.length === 1) {
      let current = this.head;
      this.head = this.tail = null;
      this.length--;
      return current;
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
  shift() {
    if (!this.head) {
      return;
    } else {
<<<<<<< HEAD
      const currentHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) this.tail = null;
      return currentHead;
=======
      const oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.head = this.tail = null;
      }
      return oldHead;
    }
  }
  unshift(val) {
    if (!this.head) {
      this.head = this.tail = val;
    } else {
      const futureHead = new Node(val);
      futureHead.next = this.head;
      this.head = futureHead;
>>>>>>> 3f77eebc3e0505c8370177565fe322bc23c9586a
    }
    this.length++;
  }
}

const sll = new SLL();
sll.push('Hello');
sll.unshift('world');
console.log(sll);
