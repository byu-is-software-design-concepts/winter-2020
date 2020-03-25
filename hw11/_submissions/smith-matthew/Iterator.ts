//Linked list iterator localted on line 6

class LinkedList {
    private head: myNode = null;

    public *items() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.Next;
        }
    }

    public append = (value: Number): LinkedList => {
        const node = new myNode(value);

        if (this.head) {
            this.head = node;
            return this;
        } else {
            let currNode = this.head;
            while (currNode.Next != null) {
                currNode = currNode.Next;
            }
            currNode.Next = node;
        }

    };
}

class myNode {
    Value: Number;
    Next?: myNode;

    constructor(value) {
        this.Value = value;
    }
}

let ls = new LinkedList();
ls.append(1);
ls.append(2);
ls.append(3);

for (let x in ls.items()) {
    console.log(x);
}

//should print out 3 Nodes with values 1, 2, 3
