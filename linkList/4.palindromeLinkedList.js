function LinkNode(val, next) {
    this.val = val;
    this.next = next;
}

// Array List
function arrayToList(arr) {
    let dummy = new LinkNode(0);
    // Create a dummy node (value doesn’t matter, here 0).
    let current = dummy;
    // A pointer current starts at the dummy.

    // We’ll use this to attach new nodes one by one.
    for (let val of arr) {
        current.next = new LinkNode(val);
        // Create a new ListNode for the current val.
        // Link it to current.next.
        current = current.next;
        // Move the pointer forward so the next new node will attach after this one.
    }

    return dummy.next;
    //     The real head of the list is after the dummy.

    // So we return dummy.next (skipping the dummy).
}

function lisedToArray(head) {
    let result = [];
    // Create an empty array to collect values.
    while (head) {
        // Loop until head becomes null (end of the linked list).
        result.push(head.val);
        // Take the current node’s value and store it in the array.
        head = head.next;
        // Move head to the next node.
    }
    return result;
    // When we reach the end, return the filled array.

}

function PalindromLinkedList(head) {
    console.log(head)
        // Two pointer technique
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head; // to compare fast to slow.
    slow = reverse(slow);

    while (slow) {
        if (fast.val !== slow.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    console.log("slow", slow);
    return true;
}

// reverse function
function reverse(root) {
    let prev = null;

    while (root) {
        let nextNode = root.next; //Ref node
        root.next = prev; //to link the prev
        prev = root;
        root = nextNode;
    }
    return prev;
}

let list = arrayToList([1, 2, 2, 1]);
// let arr = PalindromLinkedList(list);
console.log(PalindromLinkedList(list));