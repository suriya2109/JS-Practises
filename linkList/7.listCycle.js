function listCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow = next) {
            return true;
        }
    }
    return false;
}

let head = [1, 2, 3, 4]