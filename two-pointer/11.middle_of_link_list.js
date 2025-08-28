function MiddleOoLinkList(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToLinkedList(arr) {
    // 1) Make a dummy (sentinel) node so we don't need a special case for the head.
    let dummy = new ListNode(0);

    // 2) 'current' is a moving pointer that always points to the last node in the built list.
    let current = dummy;

    // 3) For each value in the array, create a node and chain it after 'current'.
    for (let val of arr) {
        // 3a) Create a new node
        current.next = new ListNode(val);

        // 3b) Move 'current' forward to the node we just added
        current = current.next;
    }

    // 4) The real head is after the dummy (skip the placeholder).
    return dummy.next;
}


let head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);

console.log(MiddleOoLinkList(head));