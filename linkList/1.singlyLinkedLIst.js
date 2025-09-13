//  Create Node 
class Node {
    constructor(data) {
        this.data = data; // Value stored to the Node
        this.next = null; //Pointer to the next value
    }
}

// Linked list

class linkedList {
    constructor() {
        this.head = null; // The entry point of the link list.
    }

    // function for, to append data to the node list
    append(data) {
        let newNode = new Node(data); //create new node list;
        if (!this.head) { //if the 1st list is not a value in that.
            this.head = newNode; // Add the data-> val and next->null.
            return;
        }

        let current = this.head; // The 1st value is the current value

        while (current.next) { // if the current value is null
            current = current.next;
        }

        current.next = newNode; // Add the new node at the end.
    }

    // Print all the nodes in the list

    printOut() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let list = new linkedList();

list.append("Apple");
list.append("Orange");
list.append("Kiwi");

list.printOut();