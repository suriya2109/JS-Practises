var removeElements = function(head, val) {

    let dummy = new ListNode(0);
    dummy.next = head
    let current = dummy;
    while (current.next != null) {
        if (current.next.val == val) {
            current.next = current.next.next; // to remove given value
        } else {
            current = current.next; // Keep move forward
        }
    }
    return dummy.next;
};