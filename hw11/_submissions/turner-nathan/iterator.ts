class LLNode {
    public value: any;
    public next: LLNode;
    public prev: LLNode;

    constructor(value, next, prev) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

class LinkedList {
    public head: LLNode = undefined;
    public tail: LLNode = undefined;

    push(value) {
        if(this.head === undefined) {
            let node = new LLNode(value, null, null)
            this.head = node
            this.tail = node
        } else {
            let node = new LLNode(value, null, this.tail)
            this.tail.next = node
            this.tail = node
        }
    }

    getIterator() {
        return new LinkedListIterator(this)
    }
}

interface CustomIterator {
    collection: any;
    next();
}

class LinkedListIterator implements CustomIterator {
    public collection: LinkedList
    private currentNode: LLNode = undefined

    constructor(linkedList) {
        this.collection = linkedList
    }

    next() {
        if (this.currentNode === this.collection.tail) {
            return undefined
        }

        if (this.currentNode === undefined) {
            this.currentNode = this.collection.head
        } else {
            this.currentNode = this.currentNode.next
        }

        return this.currentNode
    }
}

const list = new LinkedList()
list.push('I')
list.push('love')
list.push('cookies.')

const iterator = list.getIterator()

let next = true
while(next) {
    let node = iterator.next()
    if (node) {
        console.log(node.value)
    } else {
        next = false
    }
}
