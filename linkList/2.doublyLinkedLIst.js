// Create Node
class Node {
    constructor(data) {
        this.data = data; // Value stored in the Node
        this.next = null; // Value stored in the Node
        this.prev = null; // Value stored in the Node
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.tail = null; // End of the list (helps in fast appending)
    }

    // Append data to the end of the list
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            // First node becomes head and tail head --> apple <-- tail
            this.head = newNode;
            this.tail = newNode;
            return
        }

        this.tail.next = newNode;
        newNode.prev = this.tail; //head <--> apple <--> tail

        this.tail = newNode; //head <--> apple <--> tail <--> null
    }

    printForward() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next; // it sets current next, if the current node's next node is new node, until it finds null?
        }
    }
    printBackward() {
        let current = this.tail;

        while (current) {
            console.log(current.data);
            current = current.prev; // it sets current prev, if the current node's next node is prev node, until it finds null?
        }
    }

}
let list = new doublyLinkedList;

list.append("apply");
list.append("orange");
list.append("kiwi");

list.printForward();
list.printBackward();