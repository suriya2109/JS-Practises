var detectCycle = function(head) {
    let slow = head,
        fast = head;

    // Step 1: Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Step 2: Find start of cycle
            let start = head;
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start; // cycle start index
        }
    }

    return null; // no cycle
}