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

function deleteDuplicates(head) {
    // We are going put head into to the loop, if should it whthere it has value or not.
    let current = head;
    // Start a pointer current at the head node. We'll use current to scan the list.
    if (current != null) { //If the list is empty (head === null) there is nothing to do.
        while (current.next != null) { // Loop while current has a next node. We check current.next because inside the loop we compare current.val with current.next.val. If current.next is null, we've reached the end and stop.
            if (current.next.val == current.val) { //If the value of the next node equals the current node value (a duplicate)...
                current.next = current.next.next;
                // skip the duplicate node
            } else {
                current = current.next; // move forward
            }
        }
    }
    return head;
};

let list = arrayToList([1, 1, 2, 3]);
let newList = deleteDuplicates(list);
console.log(lisedToArray(newList));
// result LinkNode { val: 1, next: LinkNode { val: 2, next: undefined } }