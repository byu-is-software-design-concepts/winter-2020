class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }
}

LinkedList.prototype.addToBeginning = (value) => {
  const nextNode = new Node(value);

  nextNode.next = this.head;
  this.head = nextNode;

  return this.head;
};

LinkedList.prototype.addToEnd = (value) => {
  const nextNode = new Node(value);

  if (!this.head) {
    this.head = nextNode;
    return this.head;
  }

  let tail = this.head;
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = nextNode;

  return this.head;
};
