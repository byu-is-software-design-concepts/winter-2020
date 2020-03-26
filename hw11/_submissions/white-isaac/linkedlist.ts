class LinkedList {
    startNode: listItem
    endNode: listItem
    numItems: number = 0;

    push(value: any) {
        let newNode = new listItem(value);
        if (this.startNode == null) {
            this.startNode = newNode;
        }
        if (this.endNode != null) {
            newNode.prevNode = this.endNode;
            this.endNode.nextNode = newNode;
        }
        this.endNode = newNode;
        this.numItems += 1;
    }

    insert(value: any, index: number) {
        let oldNode = this.getNode(index);
        let prevNode = oldNode.prevNode;
        let newNode = new listItem(value);

        prevNode.nextNode = newNode;
        newNode.prevNode = prevNode;
        newNode.nextNode = oldNode;
        oldNode.prevNode = newNode;
        this.numItems += 1;
    }

    set(value: any, index:number) {
        let currNode = this.getNode(index);
        currNode.value = value;
    }

    getNode(index: number): listItem {
        let current = this.startNode;
        if (index >= this.numItems) {
            throw new Error (
                'The position you chose was out of range!'
            )
        } else {
            for (let x=0; x < index; x += 1) {
                current = current.nextNode
            }
        }
        return current
    }
}

class listItem {
    value: any
    nextNode: listItem
    prevNode: listItem
    constructor(value: any) {
        this.value = value;
    }
}